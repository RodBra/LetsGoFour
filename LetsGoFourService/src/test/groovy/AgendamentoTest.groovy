import com.bandtec.LetsGoFourService.AgendamentoController
import com.bandtec.LetsGoFourService.model.Agendamento
import com.bandtec.LetsGoFourService.repository.AgendamentoRepository
import com.bandtec.LetsGoFourService.service.AgendamentosService
import org.springframework.http.ResponseEntity
import spock.lang.Specification

class AgendamentoTest extends Specification{

    private AgendamentoRepository repository

    void "config"(){
        repository = Stub(AgendamentoRepository.class)
    }

    def "Agendamento indiponivel"(){
        given:
        Date date = new Date()
        Agendamento agendamento = new Agendamento("AKJDidiwoniocdn", date)

        and:
        AgendamentoRepository repository2 = Stub(AgendamentoRepository.class)
        AgendamentosService service = new AgendamentosService(repository2)
        AgendamentoController controller = new AgendamentoController(service)

        when:
        ResponseEntity result = controller.agendar(agendamento)
        String body = result.getBody()

        then:
        body == "Data indisponivel"
        System.out.println(body)
    }

    def "Faha ao agendar"(){
        given:
        Date date = new Date()

        Agendamento agendamento = new Agendamento("AKJDidiwoniocdn", date)

        and:
        AgendamentosService service = new AgendamentosService(repository)
        AgendamentoController controller = new AgendamentoController(service)

        when:
        ResponseEntity result = controller.agendar(agendamento)
        String body = result.getBody()

        then:
        thrown(NullPointerException)
        System.out.println(NullPointerException)
    }
}
