import com.bandtec.jobbers.Dao.ContratanteRepository
import com.bandtec.jobbers.Dao.PrestadorRepository
import com.bandtec.jobbers.controller.LoginController
import com.bandtec.jobbers.model.Credenciais
import com.bandtec.jobbers.model.UsuarioContratante
import com.bandtec.jobbers.model.UsuarioPrestador
import org.springframework.mock.web.MockHttpSession
import spock.lang.Specification

import javax.servlet.http.HttpSession

class LoginControllerTest extends Specification {

    LoginController controller
    UsuarioPrestador prestador
    UsuarioContratante contratante
    Credenciais credenciais
    PrestadorRepository prestadorRepository
    ContratanteRepository contratanteRepository
    HttpSession session

    def setup(){
        credenciais = Mock(credenciais)
        prestador = Mock(prestador)
        contratante Mock(contratante)
        controller = new LoginController(credenciais, prestador, contratante)
         session = new MockHttpSession()
    }

    def 'Login Com Sucesso'(){
        given:
        controller.login() >>> [
                new Credenciais('Rodrigo')
        ]

    }
}
