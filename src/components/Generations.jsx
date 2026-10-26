
import { motion } from 'motion/react'
import {
    Heart,
    Sprout,
    Users,
    ArrowUpRight,
} from 'lucide-react'
import '../assets/styles/Generations.css'

const members = [
    {
        id: 1,
        name: 'Evelyn',
        description:
        'En enero llegó Evelyn, la primera hija de Nelson y Dora Helena, dando inicio a una nueva etapa en la historia de la familia.',
        icon: Sprout,
        color: 'blue',
        photoLabel: 'Fotografía de Evelyn',
    },
    {
        id: 2,
        name: 'Mariana Pauline',
        description:
        'Cinco años después nació Mariana Pauline, ampliando la familia y sumando nuevos recuerdos a su historia.',
        icon: Heart,
        color: 'purple',
        photoLabel: 'Fotografía de Mariana Pauline',
    },
    {
        id: 3,
        name: 'Edier',
        description:
        'Más adelante, cuando vivían en la vereda México, Nelson y Dora Helena acogieron en su hogar a Edier, un muchacho de 12 años.',
        icon: Users,
        color: 'blue',
        photoLabel: 'Fotografía familiar con Edier',
    },
    ]

    const Generations = () => {
    return (
        <section className="generations" id="generaciones">
        <div className="generations__inner">
            <motion.div
            className="generations__heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            >

            <h2 className="generations__title">
                Una historia que
                <br />
                <span>sigue creciendo.</span>
            </h2>

            <p className="generations__description">
                Cada generación trae nuevas experiencias, personas y
                recuerdos. La historia de Nelson y Dora Helena continuó
                con la llegada de sus hijas y con la apertura de su hogar
                para recibir a alguien más.
            </p>
            </motion.div>

            <div className="generations__grid">
            {members.map((member, index) => {
                const Icon = member.icon

                return (
                <motion.article
                    className={`generation-card generation-card--${member.color}`}
                    key={member.id}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                    }}
                >

                    <div
                    className="generation-card__photo"
                    role="img"
                    aria-label={`Espacio reservado para ${member.photoLabel.toLowerCase()}`}
                    >
                    <div className="generation-card__photo-content">
                        <span className="generation-card__photo-plus">
                        +
                        </span>
                        <span>{member.photoLabel}</span>
                    </div>
                    </div>

                    <div className="generation-card__content">

                    <h3>{member.name}</h3>

                    <p>{member.description}</p>
                    </div>
                </motion.article>
                )
            })}
            </div>

            <motion.div
            className="generations__closing"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            >
            <div className="generations__closing-icon" style={{ backgroundColor: 'transparent' }}>
            </div>

            <div className="generations__closing-text">
                <h3>
                Las raíces nos unen.
                <br />
                <span>Los recuerdos nos mantienen cerca.</span>
                </h3>
                <p>
                Esta historia sigue abierta: cada recuerdo compartido
                permite que las próximas generaciones conozcan de
                dónde vienen y cómo comenzó todo.
                </p>
            </div>

            <a
                className="generations__back-link"
                href="#inicio"
                aria-label="Volver al inicio"
            >
                <ArrowUpRight size={21} />
            </a>
            </motion.div>

            <div className="generations__footer">
            <span>Montoya Gómez · Muñoz Toro</span>
            <span>Una historia familiar que continúa</span>
            </div>
        </div>
        </section>
    )
}

export default Generations
