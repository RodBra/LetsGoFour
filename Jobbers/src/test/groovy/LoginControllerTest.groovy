import com.bandtec.jobbers.Dao.ContratanteRepository
import com.bandtec.jobbers.Dao.PrestadorRepository
import com.bandtec.jobbers.controller.LoginController
import com.bandtec.jobbers.model.Credenciais
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.mock.web.MockHttpSession
import spock.lang.Specification

import javax.servlet.http.HttpSession

class LoginControllerTest extends Specification {

    def "Login com sucesso"(){
        given: "Insere os dados de credenciais"
        Credenciais credenciais = new Credenciais()
        credenciais.setSenha("joao1234")
        credenciais.setLogin("Joao1234")

        and:
        PrestadorRepository prestadorRepository = Stub(PrestadorRepository.class)
        ContratanteRepository contratanteRepository = Stub(ContratanteRepository.class)

        and: "Mock da session"
        HttpSession session = new MockHttpSession()
        LoginController controller = new LoginController(credenciais, prestadorRepository, contratanteRepository)

        and:
        ResponseEntity result = controller.login(session, credenciais)
        String status = result.getStatusCode()

        expect:
        status == "200 OK"

    }
}
