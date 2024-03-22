import Card from '../../util/card';
import "./Home.css"
export default function Home() {

  return (
    <div className='background'>
    <div className="HomeContainer">
    <Card
    bgcolor="secondary"
    header="Welcome to the bank"
    body={
      <>
        <p>For all your banking needs</p>
        <div>
          <img src='./bankicon.png' alt="wat" width="100%"/>
        </div>
        <h2>Prime Time Bank</h2>
      </>
      
    }
    />
    <p><h1>We Will be Banking With no Banks.</h1></p>
    </div>
    </div>
  )
}