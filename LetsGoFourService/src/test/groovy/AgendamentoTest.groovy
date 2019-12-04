import com.bandtec.LetsGoFourService.AgendamentoController
import com.bandtec.LetsGoFourService.gerenciadorDeFilas.FilaDeAgendamentos
import com.bandtec.LetsGoFourService.model.Agendamento
import com.bandtec.LetsGoFourService.repository.AgendamentoEmEsperaRepository
import com.bandtec.LetsGoFourService.repository.AgendamentoRepository
import com.bandtec.LetsGoFourService.service.AgendamentosService
import org.springframework.http.ResponseEntity
import spock.lang.Specification

class AgendamentoTest extends Specification{

    private AgendamentoRepository repository
    private AgendamentoEmEsperaRepository esperaRepository
    private FilaDeAgendamentos fila
    private Date date = new Date()
    private Agendamento agendamento2 = new Agendamento("5d9fa9efd3169c199094eec5", "5d9fa9efd3169c199094eec5", date)
    private String data2


    void "config"(){
        data2 = date.getDate();
        repository = Stub(AgendamentoRepository.class)
        esperaRepository = Stub(AgendamentoEmEsperaRepository.class)
    }

    def "Agendamento indiponivel, reservando"(){
        given:
        Agendamento agendamento = new Agendamento("AKJDidiwoniocdn", data2)

        and:
        fila = new FilaDeAgendamentos(agendamento2)
        AgendamentoRepository repository2 = Stub(AgendamentoRepository.class)
        AgendamentosService service = new AgendamentosService(repository2)
        AgendamentoController controller = new AgendamentoController(service, fila)

        when:
        ResponseEntity result = controller.agendar(agendamento, "5d9fa9efd3169c199094eec5")
        String body = result.getBody()

        then:
        body == "Data não disponível, em fila de espera"
        System.out.println(body)
    }

    def "Faha ao agendar"(){
        given:
        Agendamento agendamento = new Agendamento("AKJDidiwoniocdn", data2)

        and:
        fila = new FilaDeAgendamentos(agendamento2)
        AgendamentosService service = new AgendamentosService(repository)
        AgendamentoController controller = new AgendamentoController(service, fila)

        when:
        ResponseEntity result = controller.agendar(agendamento, "5d9fa9efd3169c199094eec5")
        String body = result.getBody()

        then:
        thrown(NullPointerException)
        System.out.println(NullPointerException)
    }
}
