export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white">
      
      {/* Badge Superior Sutil */}
      <span className="px-3 py-1 text-xs font-medium tracking-widest uppercase bg-black text-white rounded-full mb-6 animate-fade-in">
        The Future of Talent Management
      </span>

      {/* Título Estilo Editorial */}
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter text-black">
        Autriche<span className="text-gray-400">.</span>Models
      </h1>

      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed">
        La intersección entre el **talento excepcional** y las **marcas globales**. 
        Gestiona, descubre y conecta en una sola plataforma de alta costura digital.
      </p>

      {/* Grupo de Botones Mejorado */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
        <a
          href="/register/model"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-black text-white font-semibold transition-all hover:scale-105 hover:bg-gray-900 shadow-xl"
        >
          Unirme como Modelo
        </a>

        <a
          href="/register/enterprise"
          className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-black font-semibold transition-all hover:bg-black hover:text-white"
        >
          Soy una Empresa
        </a>
      </div>

      {/* Login discreto abajo */}
      <p className="mt-10 text-gray-400">
        ¿Ya tienes cuenta?{' '}
        <a href="/login" className="text-black font-bold underline underline-offset-4 hover:text-gray-600">
          Inicia sesión aquí
        </a>
      </p>

      {/* Decoración Visual (Opcional: Grid de imágenes abstractas) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </main>
  );
}