import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface EmailProps {
    email?: string;
}

export const Email = ({ email }: EmailProps) => (
    <Html>
        <Head />
        <Body style={main}>
            <Preview>Железнодорожные перевозки</Preview>
            <Container style={container}>
                <Section style={box}>
                    <Text style={cargo}>12CARGO</Text>
                    <Hr style={hr} />
                    <Text style={paragraph}>Добрый день!</Text>
                    <Text style={paragraph}>
                        Мы предоставляем вагоны для железнодорожных перевозок по РФ и СНГ.
                    </Text>
                    <Img
                        src="https://12cargo.ru/image/img.webp"
                        width="400"
                        style={hero}
                    />
                    <Hr style={hr} />
                    <Text style={paragraph}>
                        <Link style={anchor}>Полувагоны</Link> - для перевозки щебня, угля, труб,
                        грузов в МКР.
                    </Text>
                    <Text style={paragraph}>
                        <Link style={anchor}>Крытые вагоны</Link> - для перевозки паллет,
                        оборудования, сухих строительных смесей и ТНП.
                    </Text>
                    <Text style={paragraph}>
                        <Link style={anchor}>Лесовозные платформы</Link> - для перевозки
                        пиломатериалов и круглого леса.
                    </Text>
                    <Text style={paragraph}>
                        <Link style={anchor}>Цистерны</Link> - для светлых и темных нефтепродуктов.
                    </Text>
                    <Hr style={hr} />
                    <Text style={paragraph}>
                        Также мы оказываем услуги погрузки груза в вагон, во многих регионах РФ.
                        Оплатим железнодорожный тариф за груженый вагон с собственного ЕЛС.
                    </Text>
                    <Hr style={hr} />
                    <Button style={button} href="https://api.whatsapp.com/send?phone=79600806661">
                        Узнать стоимость перевозки
                    </Button>

                    <Text style={paragraph}>e-mail: smr@12cargo.ru</Text>
                    <Hr style={hr} />
                    <Text style={footer}>ООО 12КАРГО, ИНН 1656119812, 12cargo@12cargo.ru</Text>
                    <Text style={footer}>
                        {email ? (
                            <Link href={`https://12cargo.ru/api/unsubscribe?email=${email}`}>
                                Отписаться
                            </Link>
                        ) : null}
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default Email;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
};

const box = {
    padding: "0 48px",
};

const cargo = {
    color: "#9f0712",
    fontSize: "30px",
    lineHeight: "24px",
    fontWeight: "bold",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const hero = {
    borderRadius: "10px",
    width: "100%",
};

const paragraph = {
    color: "#525f7f",

    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const,
};

const anchor = {
    color: "#9f0712",
};

const button = {
    backgroundColor: "#242424",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
    height: "50px",
    padding: "10px",
    lineHeight: "50px",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
};
