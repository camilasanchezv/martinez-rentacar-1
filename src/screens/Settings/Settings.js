import { Tabs, Tab } from 'grommet';
import React from 'react';
import { Container, Error, UserSignUp } from '../../components'
import './styles.scss';

export default function Settings() {
    // const context = useContext(AppContext)
    // const [response, setResponse] = useState();
    // const { id } = useParams();

    // useEffect(async () => {
    //     const res = await context.getCar(id);
    //     setResponse(res)
    // }, [])

    return (
        <Container>
            { false
                ? <Error error="Usuario no encontrado" />
                : <Tabs>
                    <Tab title="Cambiar Información">
                        <UserSignUp modify="true" />
                    </Tab>
                </Tabs>}
        </Container>
    )
}

