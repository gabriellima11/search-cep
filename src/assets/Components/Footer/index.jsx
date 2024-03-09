import { Container } from "./style";

export const Footer = () =>{
    return(
        <Container>
            <h2>GFL DEV</h2>
            <div className="icons">
                <a href="https://github.com/gabriellima11" target="_blank"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/limaf-gabriel" target="_blank"><i class="bi bi-linkedin"></i></a>
                <a href="https://my-portfolio-two-zeta.vercel.app" target="_blank"><i class="bi bi-link-45deg"></i></a>
            </div>
        </Container>
    )
}