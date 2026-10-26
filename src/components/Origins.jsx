
import { motion } from 'motion/react'
import { ArrowDownRight, Heart, MapPin } from 'lucide-react'
import '../assets/styles/Origins.css'
import originMontoya from '../assets/images/FamiliaMu.jpeg'

const origins = [
    {
        id: 'montoya',
        number: '01',
        name: 'Montoya Gómez',
        subtitle: 'Una historia que comenzó en el campo',
        color: 'blue',
        date: '1963',
        location: 'Los Chapos · región de Guática y Anserma',
        description:
        'Blanca Libia Gómez y Luis Eduardo Montoya construyeron su historia en una época marcada por la vida en el campo. Se casaron en 1963 y formaron una familia numerosa, cuyos hijos nacieron en diferentes lugares de la región.',
        detail: '13 hijos en su historia familiar',
        imageLabel: 'Fotografía de la familia Montoya Gómez',
    },
    {
        id: 'munoz',
        number: '02',
        name: 'Muñoz Toro',
        subtitle: 'El encuentro de dos caminos',
        color: 'purple',
        date: '1976',
        location: 'Conchari · Anserma',
        description:
        'María Margarita Toro conoció a José Orlando Muñoz en una fiesta después de asistir a misa. Con el tiempo, aquel encuentro dio paso a su matrimonio, celebrado en Anserma en enero de 1976, y a una familia de cuatro hijos.',
        detail: '4 hijos: María Ruby, José Aldemar, Rodrigo y Dora Helena',
        imageLabel: 'Fotografía de la familia Muñoz Toro',
        image: originMontoya,
    },
    ]

    const Origins = () => {
    return (
        <section className="origins" id="origenes">
        <div className="origins__inner">
            <motion.div
            className="origins__intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            >

            <h2 className="origins__title">
                Toda historia tiene
                <br />
                <span>un comienzo.</span>
            </h2>

            <p className="origins__description">
                Antes de que nuestros caminos se unieran, existían dos
                historias distintas. Dos familias con sus propios recuerdos,
                experiencias y personas que dejaron huella.
            </p>
            </motion.div>

            <div className="origins__list">
            {origins.map((family, index) => (
                <motion.article
                className={`origin-card origin-card--${family.color}`}
                key={family.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                >
                <div className="origin-card__content">
                    <div className="origin-card__top">
                    <span className="origin-card__number">
                        {family.number}
                    </span>

                    <span className="origin-card__date">
                        {family.date}
                    </span>
                    </div>

                    <span className="origin-card__subtitle">
                    {family.subtitle}
                    </span>

                    <h3 className="origin-card__title">
                    {family.name}
                    </h3>

                    <p className="origin-card__description">
                    {family.description}
                    </p>

                    <div className="origin-card__location">
                    <MapPin size={17} strokeWidth={1.8} />
                    <span>{family.location}</span>
                    </div>

                    <div className="origin-card__detail">
                    <Heart size={17} strokeWidth={1.8} />
                    <span>{family.detail}</span>
                    </div>
                </div>

                <div className="origin-card__visual">
                    <img
                        className="origin-card__image"
                        src={family.image}
                        alt={family.imageLabel}
                    />

                    <span className="origin-card__image-index">
                    {family.number} — ARCHIVO FAMILIAR
                    </span>
                </div>
                </motion.article>
            ))}
            </div>

            <motion.a
            className="origins__next"
            href="#union"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            >
            <span>Y un día, ambas historias se encontraron</span>
            <ArrowDownRight size={21} />
            </motion.a>
        </div>
        </section>
    )
}

export default Origins
