import Header from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { Outlet } from "react-router-dom"
import { Container } from "@/components/container"

export const MainLayout =() => {
    return (
        <div className="flex flex-col h-screen">
            {/*handler to store the user data*/} 
            <Header />
            <Container className="flex-grow">
                <main className="flex-grow">
                    <Outlet />
                </main>
                

            </Container>
           
            <Footer />
        </div>
    )
}