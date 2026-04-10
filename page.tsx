import React from "react";

export default function Page() {
  return (
    <main style={{fontFamily:"sans-serif", background:"#F7F5F3", color:"#222"}}>

      {/* NAV */}
      <div style={{display:"flex", justifyContent:"space-between", padding:"20px 40px"}}>
        <h1 style={{color:"#B46A6A", letterSpacing:2}}>BURGOS ABOGADOS</h1>
        <div>
          <a style={{marginRight:20}}>Servicios</a>
          <a style={{marginRight:20}}>Firma</a>
          <a>Contacto</a>
        </div>
      </div>

      {/* HERO */}
      <section style={{textAlign:"center", padding:"120px 20px"}}>
        <h2 style={{fontSize:48, color:"#B46A6A"}}>
          Defensa legal con visión estratégica
        </h2>
        <p style={{maxWidth:700, margin:"20px auto"}}>
          Firma legal en Mérida enfocada en resultados, atención personalizada y clientes exigentes.
        </p>

        <a href="https://wa.me/529996082755?text=Hola,%20quiero%20asesoría%20legal"
        style={{background:"#B46A6A", color:"#fff", padding:"14px 28px", borderRadius:30, textDecoration:"none"}}>
          Contactar por WhatsApp
        </a>
      </section>

      {/* SERVICIOS */}
      <section style={{padding:"80px 20px", maxWidth:1100, margin:"auto"}}>
        <h3 style={{textAlign:"center", fontSize:28}}>Áreas de práctica</h3>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:20, marginTop:40}}>
          {["Familia","Civil","Mercantil","Administrativo","Penal","Amparo"].map(s=>(
            <div key={s} style={{background:"#fff", padding:30, borderRadius:20, boxShadow:"0 10px 30px rgba(0,0,0,0.05)"}}>
              <h4 style={{color:"#B46A6A"}}>{s}</h4>
              <p style={{fontSize:14}}>Asesoría estratégica y acompañamiento profesional.</p>
            </div>
          ))}
        </div>
      </section>

      {/* EMPRESAS */}
      <section style={{textAlign:"center", padding:"60px"}}>
        <h3>Empresas que confían</h3>
        <p style={{marginTop:20}}>Grupo Modelo | Chedraui</p>
      </section>

      {/* FOOTER */}
      <footer style={{textAlign:"center", padding:20, fontSize:12}}>
        © Burgos Abogados
      </footer>

      {/* WHATS FLOAT */}
      <a href="https://wa.me/529996082755"
        style={{position:"fixed", bottom:20, right:20, background:"#25D366", color:"#fff",
        padding:"12px 16px", borderRadius:"50%", textDecoration:"none"}}>
        WA
      </a>

    </main>
  );
}
