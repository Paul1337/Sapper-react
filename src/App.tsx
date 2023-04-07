import { useSelector } from 'react-redux'
import Field from './components/Field/Field'
import { RootState } from './store'

function App() {
    const field = useSelector((state: RootState) => state.field.field)
    console.log(field)
    return (
        <>
            <Field field={field}></Field>
        </>
    )
}

export default App
