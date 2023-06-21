import logo from './logo.svg';
import './App.css';
import myIcon from './Assets/icon.png';
import back from './Assets/back.png';


function App() {
  return (
    <>
            <div className="container">

                    <div className='orange-circle'></div>
                    <img src={back} id='bck'/>

                    <img src={myIcon} id='img'/>
               <form>
                    <fieldset>
                        <div className='wrap-input'>
                            <label for ='primeiro-nome'>Primeiro nome</label>
                            <input type='text' name='primeiro-nome' className='txt-box'/>
                        </div>
                
                        <div className='wrap-input'>
                            <label for ='segundo-nome'>Segundo nome</label>
                            <input type='text' name='segundo-nome' className='txt-box'/>
                        </div>

                        <div className='wrap-input'>
                            <label for ='Email'>E-mail</label>
                            <input type='email' name='Email' className='txt-box'/>
                        </div>

                        <div className='wrap-input'>
                            <label for ='senha'>Senha</label>
                            <input type='password' name='senha' className='txt-box'/>
                        </div>
                        <button type='submit' id='btn'>Entrar</button>

                    </fieldset>
               </form>
            </div>
        </>
  );
}

export default App;
