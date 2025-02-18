<template>
    <main class="bg-gray-100 min-h-screen">
        <!-- Hero Section -->
        <section class="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FDCB58] text-white py-20 text-center">
            <h1 class="text-5xl font-bold">Bienvenido al Todo-app de notas de Richi</h1>
            <p class="mt-4 text-xl text-gray-200">
                Crea tus notas para tus momentos importantes del dia
            </p>
            <button
                class="mt-6 px-6 py-2 bg-white text-[#E1306C] font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300">
                ¡Empieza Ahora!
            </button>
        </section>

        <!-- Features Section -->
        <section class="max-w-6xl mx-auto px-4 py-16 grid gap-8 md:grid-cols-3">
            <!-- Card 1 -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                <h2 class="text-2xl font-bold text-[#833AB4]">Comparte Momentos</h2>
                <p class="text-gray-600 mt-2">
                    Publica fotos y videos con tus amigos y seguidores.
                </p>
                <button class="mt-4 text-[#405DE6] hover:text-[#E1306C] transition duration-300">
                    Leer más →
                </button>
            </div>
            <!-- Card 2 -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                <h2 class="text-2xl font-bold text-[#FD1D1D]">Explora el Mundo</h2>
                <p class="text-gray-600 mt-2">
                    Descubre contenido personalizado en la sección de explorar.
                </p>
                <button class="mt-4 text-[#405DE6] hover:text-[#FD1D1D] transition duration-300">
                    Leer más →
                </button>
            </div>
            <!-- Card 3 -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                <h2 class="text-2xl font-bold text-[#FDCB58]">Conecta con Amigos</h2>
                <p class="text-gray-600 mt-2">
                    Envía mensajes directos y mantente conectado.
                </p>
                <button class="mt-4 text-[#405DE6] hover:text-[#FDCB58] transition duration-300">
                    Leer más →
                </button>
            </div>
        </section>
    </main>
</template>
