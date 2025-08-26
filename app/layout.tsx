export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{display:'flex'}}>
          <aside style={{width:200,background:'#222',color:'#fff',padding:20}}>
            <h3>CRM</h3>
            <nav>
              <a href="/dashboard">Dashboard</a><br/>
              <a href="/leads">Leads</a>
            </nav>
          </aside>
          <main style={{flex:1,padding:20}}>{children}</main>
        </div>
      </body>
    </html>
  )
}
