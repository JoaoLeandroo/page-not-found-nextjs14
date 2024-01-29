import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="w-full h-screen mx-auto flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-center">Ocorreu um erro, retorne a pagina principal</h2>
            <Link className="text-5xl font-bold text-blue-500 uppercase hover:text-blue-700 transition duration-300" href={'/'}>Home</Link>
        </div>
     );
}
 
export default NotFound;