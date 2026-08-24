// app/api/contact/route.ts
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { name, email, message, honey, loadTime } = await req.json()

        // 스팸 봇 차단 (허니팟 & 3초 룰)
        if (honey || (Date.now() - (loadTime || 0) < 3000)) {
            return NextResponse.json({ success: true })
        }

        if (!name || !email || !message) {
            return NextResponse.json({ error: "모든 항목을 입력해주세요." }, { status: 400 })
        }

        // 메일 전송
        const { error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "iris_starry_@naver.com", // 👈 여기에 본인 이메일 주소 입력!
            replyTo: email,
            subject: `[포트폴리오 문의] ${name}님의 메시지`,
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>새로운 포트폴리오 문의</h2>
          <p><strong>보낸 사람:</strong> ${name}</p>
          <p><strong>이메일:</strong> ${email}</p>
          <hr />
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
        })

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (err) {
        return NextResponse.json({ error: "서버 오류" }, { status: 500 })
    }
}