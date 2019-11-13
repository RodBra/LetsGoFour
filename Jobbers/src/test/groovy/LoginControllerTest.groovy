import spock.lang.Specification

class LoginControllerTest extends Specification {

    def "tamanho da string retornada esta ok"() {
        expect:
        new  com.bandtec.jobbers.LoginControllerTest().concatena(a, b).length() == c

        where:
        a       | b          || c
        "Felix" | "Gilioli" || 13
        "um"    | "dois"     || 6
        "1"     | "2"        || 2
    }
}
