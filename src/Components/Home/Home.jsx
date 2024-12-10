const Home = () => {
    return (
        <div className="relative w-full h-screen">
            <img
                className="absolute top-0 left-0 w-full h-screen object-cover"
                src="https://cdn.shopify.com/s/files/1/0098/7247/4167/files/pc_gaming_con_setup_de_luces_led.jpg?v=1630513725"/>
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen">
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                    <div className="md:left-[10%] max-w-[1100px] m-auto p-4">
                        <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Bienvenido a la Vanguardia</h1>
                        <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">Tenemos lo que necesitas, ya sea accesorios para tu PC, una nueva PC, o algo para tu hogar que te sea útil en tu día a día. Vanguardia siempre te alegrará.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
