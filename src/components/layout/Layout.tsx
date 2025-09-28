import Header from "@/layout/Header"
import Footer from "@/layout/Footer"



interface LayoutProps {
    children:React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout