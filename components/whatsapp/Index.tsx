import Link from 'next/link';
import './Style.css';
import Image from 'next/image';

const Whatsapp = () => {
  return (
    <div className={'container'}>
      <Link href='https://wa.me/51961646248?text=Hola,%20deseo%20realizar%20una%20consulta...' target='_blank'>
        <Image
        className={'boton'}
        src='/icono.png'
        alt='rizo-whatsapp'
        width={100}
        height={100}/>
      </Link>
    </div>
  )
}

export default Whatsapp