import { useSelector } from 'react-redux'
import Cell from './components/Cell/Cell'
import Field from './components/Field/Field'

function App() {
    const field = useSelector((state) => state.field)
    return (
        <>
            <Field field={field}></Field>
        </>
    )
}

export default App
