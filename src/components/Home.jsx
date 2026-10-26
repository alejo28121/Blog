
import { motion } from 'motion/react'
import '../assets/styles/Home.css'

const Home = () => {
    return (
        <section className="home" id="inicio">
        <div className="home__inner">
            <motion.div
            className="home__content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            >
            <motion.span
                className="home__eyebrow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
            >
                MEMORIA FAMILIAR · NUESTRA HISTORIA
            </motion.span>

            <h1 className="home__title">
                Dos familias.
                <br />
                <span>Una historia</span>
                <br />
                que continúa.
            </h1>

            <p className="home__description">
                Un recorrido por las raíces de las familias Montoya Gómez
                y Muñoz Toro, sus orígenes, los caminos que recorrieron
                y la unión que dio paso a nuevas generaciones.
            </p>

            <motion.div
                className="home__actions"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
            >
                <motion.a
                className="home__primary-link"
                href="#origenes"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                >
                Conocer los orígenes
                <span aria-hidden="true">↗</span>
                </motion.a>
            </motion.div>
            </motion.div>

            
            <motion.div
            className="home__visual"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
            <div className="home__photos">
                <motion.div
                className="home__photo home__photo--main"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                >
                <div
                    className="home__image-placeholder"
                    role="img"
                    aria-label="Espacio reservado para la primera fotografía familiar"
                >
                    <div className="home__image-placeholder-content">
                    <span className="home__image-icon" aria-hidden="true">
                        +
                    </span>
                    <span className="home__image-label">
                        Primera fotografía
                    </span>
                    <span className="home__image-caption">
                        Nuestros orígenes
                    </span>
                    </div>
                </div>
                </motion.div>

                <motion.div
                className="home__photo home__photo--secondary"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                >
                <div
                    className="home__image-placeholder"
                    role="img"
                    aria-label="Espacio reservado para la segunda fotografía familiar"
                >
                    <div className="home__image-placeholder-content">
                    <span className="home__image-icon" aria-hidden="true">
                        +
                    </span>
                    <span className="home__image-label">
                        Segunda fotografía
                    </span>
                    <span className="home__image-caption">
                        Recuerdos que perduran
                    </span>
                    </div>
                </div>
                </motion.div>
            </div>
            </motion.div>
        </div>
        </section>
    )
}

export default Home
