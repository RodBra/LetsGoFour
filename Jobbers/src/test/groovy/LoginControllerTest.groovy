import com.bandtec.jobbers.Dao.ContratanteRepository
import com.bandtec.jobbers.Dao.PrestadorRepository
import com.bandtec.jobbers.controller.LoginController
import com.bandtec.jobbers.model.Credenciais
import com.bandtec.jobbers.model.Usuario
import com.bandtec.jobbers.model.UsuarioContratante
import org.springframework.http.ResponseEntity
import org.springframework.mock.web.MockHttpSession
import spock.lang.Specification

import javax.servlet.http.HttpSession

class LoginControllerTest extends Specification {

    private PrestadorRepository prestadorRepository
    private ContratanteRepository contratanteRepository

    void setup(){
        Usuario usuario = Stub(Usuario.class)
        prestadorRepository = Stub(PrestadorRepository.class)
        contratanteRepository = Stub(ContratanteRepository.class)
    }

    def "Login com sucesso"(){
        given: "Insere os dados de credenciais"
        Credenciais credenciais = new Credenciais("joao1234", "Joao1234")

        and: "Mock da session"
        HttpSession session = new MockHttpSession()
        LoginController controller = new LoginController(prestadorRepository, contratanteRepository)

        and:
        ResponseEntity result = controller.login(session, credenciais)
        String status = result.getStatusCode()

        expect:
        status == "200 OK"

    }

    def "Login com falha"(){
        given: "Insere os dados de credenciais"
        Credenciais credenciais = new Credenciais(null, null)

        and: "Mock da session"
        HttpSession session = new MockHttpSession()
        LoginController controller = new LoginController(prestadorRepository, contratanteRepository)

        and:
        ResponseEntity result = controller.login(session, credenciais)
        String status = result.getStatusCode()

        expect:
        status == "404 NOT_FOUND"

    }

    def "Cadastro com falha"(){
        given:
        Credenciais credenciais = new Credenciais("joao1234", "joao1234")
        UsuarioContratante contratante = new UsuarioContratante("teste", "teste", "teste", "teste","teste","teste",1, credenciais)

        and:
        HttpSession session = new MockHttpSession()
        LoginController controller = new LoginController(prestadorRepository, contratanteRepository)

        and:
        ResponseEntity result = controller.cadastrarContratante(session, contratante)
        String status = result.getStatusCode()

        expect:
        status == "409 CONFLICT"
    }
}
