"use client";
import { useState } from "react";

export function LoginModal({ onClose, onLogin }: { onClose: () => void; onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="modal-bg" role="dialog" aria-modal="true" aria-label="Sign in" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ background:"#282828", borderRadius:14, padding:32, width:400, maxWidth:"94vw", textAlign:"center", position:"relative" }}>
        <button onClick={onClose} style={{ position:"absolute", top:12, right:12, background:"none", border:"none", color:"var(--text)", fontSize:22, cursor:"pointer", width:36, height:36, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }} aria-label="Close">✕</button>
        <h2 style={{ fontSize:26, fontWeight:700, marginBottom:4 }}>👤 Sign in</h2>
        <p style={{ fontSize:13, color:"var(--dim)", marginBottom:22 }}>to continue to ViewTube</p>
        <div style={{ textAlign:"left", marginBottom:12 }}>
          <label style={{ fontSize:12, color:"var(--dim)", marginBottom:5, display:"block" }}>Email</label>
          <input className="finput" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
        </div>
        <div style={{ textAlign:"left", marginBottom:16 }}>
          <label style={{ fontSize:12, color:"var(--dim)", marginBottom:5, display:"block" }}>Password</label>
          <input className="finput" type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Enter your password" onKeyDown={e => { if (e.key === "Enter") onLogin(); }} />
        </div>
        <button onClick={onLogin} style={{ width:"100%", background:"#3ea6ff", border:"none", color:"#000", padding:11, borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", marginBottom:12, fontFamily:"inherit" }}>
          Sign in
        </button>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12, fontSize:13, color:"var(--dim)" }}>
          <div style={{ flex:1, height:"0.5px", background:"var(--border)" }} /> or <div style={{ flex:1, height:"0.5px", background:"var(--border)" }} />
        </div>
        <button onClick={onLogin} style={{ width:"100%", background:"var(--bg3)", border:"0.5px solid var(--bg4)", color:"var(--text)", padding:11, borderRadius:8, fontSize:13, fontWeight:500, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:10, fontFamily:"inherit" }}>
          <span style={{ fontSize:16, fontWeight:700, fontFamily:"serif", color:"#4285f4" }}>G</span> Continue with Google
        </button>
        <p style={{ fontSize:11, color:"var(--dim)", marginTop:14 }}>By continuing you agree to ViewTube&apos;s Terms &amp; Privacy Policy</p>
      </div>
    </div>
  );
}
