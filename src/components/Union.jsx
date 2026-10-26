
import { motion } from 'motion/react'
import {
    Heart,
    CalendarDays,
    Users,
    ArrowDown,
    HeartHandshake
} from 'lucide-react'
import '../assets/styles/Union.css'

const milestones = [
    {
        year: '1991',
        title: 'Un primer encuentro',
        description:
        'Nelson y Dora Helena se conocieron cuando eran niños. Él tenía 10 años y ella 5 años.',
        color: 'blue',
        icon: Users,
    },
    {
        year: '2006',
        title: 'El comienzo de su historia',
        description:
        'Después de varios años de conocerse, comenzaron su relación y decidieron construir una vida juntos.',
        color: 'purple',
        icon: Heart,
    },
    {
        year: '11 AGO · 2007',
        title: 'Una decisión para toda la vida',
        description:
        'Tras cinco meses de noviazgo, Nelson y Dora Helena se casaron y dieron comienzo a una nueva etapa.',
        color: 'blue',
        icon: HeartHandshake,
    },
    ]

    const Union = () => {
    return (
        <section className="union" id="union">
        <div className="union__inner">
            <motion.div
            className="union__heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            >

            <h2 className="union__title">
                Dos caminos.
                <br />
                <span>Un mismo destino.</span>
            </h2>

            <p className="union__description">
                Las historias de Montoya Gómez y Muñoz Toro encontraron
                un nuevo capítulo en Nelson y Dora Helena. Lo que comenzó
                con un encuentro en la infancia se convirtió en una familia.
            </p>
            </motion.div>

            <motion.div
            className="union__couple"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            >
            <div className="union__family-label union__family-label--left">
                <span className="union__family-dot union__family-dot--blue" />
                <span>Montoya Gómez</span>
            </div>

            <div
                className="union__photo"
                role="img"
                aria-label="Espacio reservado para una fotografía de Nelson Montoya y Dora Helena Muñoz"
            >
                <div className="union__photo-decoration" />

                <div className="union__photo-content">
                <span className="union__photo-heart">
                    <Heart size={27} strokeWidth={1.4} />
                </span>
                <span className="union__photo-title">
                    Nelson & Dora Helena
                </span>
                <span className="union__photo-caption">
                    Aquí comienza un nuevo capítulo
                </span>
                </div>

                <span className="union__photo-index">
                11 · 08 · 2007
                </span>
            </div>

            <div className="union__family-label union__family-label--right">
                <span className="union__family-dot union__family-dot--purple" />
                <span>Muñoz Toro</span>
            </div>

            <div className="union__heart-center" aria-hidden="true">
                <Heart size={18} />
            </div>
            </motion.div>

            <div className="union__timeline-heading">
            <h3>Una historia en el tiempo</h3>
            </div>

            <div className="union__timeline">
            {milestones.map((item, index) => (
                <motion.article
                className={`union__milestone union__milestone--${item.color}`}
                key={item.year}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                >
                <div className="union__milestone-marker">
                    <item.icon size={21} strokeWidth={1.7} />
                </div>

                <span className="union__milestone-year">
                    {item.year}
                </span>

                <h4>{item.title}</h4>
                <p>{item.description}</p>
                </motion.article>
            ))}
            </div>

            <motion.div
            className="union__family"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            >
            <div className="union__family-content">
                <span className="union__family-kicker">
                UNA FAMILIA QUE CRECE
                </span>

                <h3>
                El amor también
                <br />
                <span>se convierte en hogar.</span>
                </h3>

                <p>
                En enero nació Evelyn, su primera hija. Cinco años después
                llegó Mariana Pauline. Más adelante, en la vereda México,
                Nelson y Dora Helena acogieron en su hogar a Edier,
                un muchacho de 12 años.
                </p>
            </div>

            <div className="union__family-visual">
                <div
                className="union__family-photo"
                role="img"
                aria-label="Espacio reservado para una fotografía familiar de Nelson, Dora Helena y sus hijos"
                >
                <div className="union__family-photo-content">
                    <Users size={29} strokeWidth={1.4} />
                    <span>La familia</span>
                    <small>Espacio para una fotografía familiar</small>
                </div>
                </div>
            </div>
            </motion.div>

            <motion.a
            className="union__next"
            href="#generaciones"
            whileHover={{ y: 4 }}
            transition={{ duration: 0.2 }}
            >
            <span>La historia continúa en nuevas generaciones</span>
            <ArrowDown size={19} />
            </motion.a>
        </div>
        </section>
    )
}

export default Union
