import com.bandtec.LetsGoFourService.AvaliacaoController
import com.bandtec.LetsGoFourService.gerenciadorDeFilas.FilaDeAgendamentos
import com.bandtec.LetsGoFourService.model.Avaliacao
import com.bandtec.LetsGoFourService.model.Avaliacao

import com.bandtec.LetsGoFourService.repository.AvaliacaoRepository
import com.bandtec.LetsGoFourService.service.AvaliacaoService
import org.springframework.http.ResponseEntity
import spock.lang.Specification

class AgendamentoTest extends Specification{

    private AvaliacaoRepository repository
    private AgendamentoEmEsperaRepository esperaRepository
    private FilaDeAgendamentos fila
    private Date date = new Date()
    private Avaliacao agendamento2 = new Avaliacao("5d9fa9efd3169c199094eec5", "5d9fa9efd3169c199094eec5", date)

    void "config"(){

        repository = Stub(AvaliacaoRepository.class)
        esperaRepository = Stub(AgendamentoEmEsperaRepository.class)
    }

    def "Agendamento indiponivel, reservando"(){
        given:
        Avaliacao agendamento = new Avaliacao("AKJDidiwoniocdn", date)

        and:
        fila = new FilaDeAgendamentos(agendamento2)
        AvaliacaoRepository repository2 = Stub(AvaliacaoRepository.class)
        AvaliacaoService service = new AvaliacaoService(repository2)
        AvaliacaoController controller = new AvaliacaoController(service, fila)

        when:
        ResponseEntity result = controller.agendar(agendamento, "5d9fa9efd3169c199094eec5")
        String body = result.getBody()

        then:
        body == "Data não disponível, em fila de espera"
        System.out.println(body)
    }

    def "Faha ao agendar"(){
        given:
        Avaliacao agendamento = new Avaliacao("AKJDidiwoniocdn", date)

        and:
        fila = new FilaDeAgendamentos(agendamento2)
        AvaliacaoService service = new AvaliacaoService(repository)
        AvaliacaoController controller = new AvaliacaoController(service, fila)

        when:
        ResponseEntity result = controller.agendar(agendamento, "5d9fa9efd3169c199094eec5")
        String body = result.getBody()

        then:
        thrown(NullPointerException)
        System.out.println(NullPointerException)
    }
}
