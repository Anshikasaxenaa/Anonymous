import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    section,
    Text,
    Button,
} from '@react-email/components';

interface VerificationEmailProps{
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp }
    : VerificationEmailProps){
        return (
            <Html lang="en" dir="ltr">
                <head>
                    <title>Verification Code</title>
                    <Font
                    fontFamily = "Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2](https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                    
                    ></Font>
                </head>
                <Preview>Here&apos;s your verification code: {otp}</Preview>
                <section>
                    <Row>
                        <Heading as="h2">HEllo {username},</Heading>
                    </Row>
                    <Row>
                        <Text>
                            Thank you for registering. Please use the following verification code to complete your registration:
                        </Text>
                    </Row>
                    <Row>
                        <Text>{otp}</Text>
                    </Row>
                    <Row>
                    <Text>
                        If you did not request this code, please ignore this email.
                    </Text>
                    </Row>
                    {/* <Row>
                    <Button
                       href={`http://localhost:3000/verify/${username}`}
                       stylr={{ color: `#61dafb` }}
                    >Verify here
                    </Button></Row>*/}
                </section>
            </Html>
        );
    }