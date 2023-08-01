import './App.css'
import Question01a from './component/Question01a';
import Question01b from './component/Question01b';
import Question01c from './component/Question01c';

function App() {

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className='qs01'><Question01a/></td>
            <td><Question01b/></td>
          </tr>
          <tr>
            <td className='qs01c'><Question01c/></td>
            <td>Row 2, Column 2</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App
