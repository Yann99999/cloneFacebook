import face from '../../assets/imgs/logo_facebook.svg'

import Form from '../Form/Form'

const Main = () => {
  return (
    <main>
      <div className="md:bg-main-gray md:pt-30 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-980px mx-auto">
          <div className="pt-10">
            <img src={face} alt="Logo do Facebook" className='w-30 mx-auto md:mx-0 
            md:w-290px md:-mb-4 md:-ml-8'/>
            <p className='hidden md:flex text-subtitle leading-8 w-500px pr-6'>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</p>
          </div>
          <Form/>
        </div>
      </div>
    </main>
  )
}

export default Main