"use client";
import { useState } from "react";

export function UploadModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("Tech");

  return (
    <div className="modal-bg" role="dialog" aria-modal="true" aria-label="Upload video" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
          <h2 style={{ fontSize:17, fontWeight:600 }}>Upload video</h2>
          <button onClick={onClose} style={{ background:"none", border:"none", color:"var(--text)", fontSize:22, cursor:"pointer", width:36, height:36, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }} aria-label="Close">✕</button>
        </div>

        {step === 1 && (
          <>
            <label htmlFor="fileInp" style={{ border:"2px dashed var(--bg4)", borderRadius:10, padding:36, textAlign:"center", cursor:"pointer", display:"block", marginBottom:14 }}>
              <div style={{ fontSize:44, marginBottom:10 }}>📁</div>
              <p style={{ fontSize:15, fontWeight:600, marginBottom:6 }}>Drag and drop video files</p>
              <p style={{ fontSize:13, color:"var(--dim)", marginBottom:14 }}>Your videos will be private until published</p>
              <span style={{ background:"var(--bg3)", color:"var(--text)", padding:"8px 18px", borderRadius:20, fontSize:13 }}>Select files</span>
            </label>
            <input id="fileInp" type="file" accept="video/*" style={{ display:"none" }} onChange={e => { if (e.target.files?.length) setStep(2); }} />
          </>
        )}

        {step === 2 && (
          <>
            <div style={{ marginBottom:12 }}>
              <label style={{ fontSize:12, color:"var(--dim)", marginBottom:5, display:"block" }}>Title (required)</label>
              <input className="finput" value={title} onChange={e => setTitle(e.target.value)} placeholder="Add a title for your video" />
            </div>
            <div style={{ marginBottom:12 }}>
              <label style={{ fontSize:12, color:"var(--dim)", marginBottom:5, display:"block" }}>Description</label>
              <textarea className="finput" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Tell viewers about your video" style={{ resize:"vertical", minHeight:72 }} />
            </div>
            <div style={{ marginBottom:12 }}>
              <label style={{ fontSize:12, color:"var(--dim)", marginBottom:5, display:"block" }}>Category</label>
              <select className="finput" value={cat} onChange={e => setCat(e.target.value)}>
                {["Gaming","Music","Tech","Science","Education","Comedy","Sports","News","Cooking","Travel"].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div style={{ background:"rgba(0,200,100,0.1)", border:"0.5px solid rgba(0,200,100,0.3)", borderRadius:8, padding:"10px 12px", fontSize:13, color:"#4ade80", marginBottom:4 }}>
              ✅ Video uploaded — processing...
            </div>
            <div style={{ display:"flex", justifyContent:"flex-end", gap:8, marginTop:14 }}>
              <button className="fbtn" onClick={onClose}>Save draft</button>
              <button className="fbtn red" onClick={() => { onClose(); alert(`🎉 "${title || "Untitled"}" published!`); }}>Publish</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
