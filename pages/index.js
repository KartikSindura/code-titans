import styles from '../styles/Index.module.css'
import Aboutus from '../components/Aboutus'
import { motion } from 'framer-motion'
import Contactus from '../components/Contactus'

export default function Home() {
  return (
    <motion.div
      target="_blank"
      href='/'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      alt="no">
      {/* <div className={styles.content}>
        <h1 className={styles.header}>
          <code>
            Finance Trading
          </code>
        </h1>
        <div className={styles.content}>
          <code>
            About Us
          </code>
        <div className={styles.footer}>
          <code>
            hello
          </code>
        </div>
      </div>
        </div> */}
        <div className={styles.content}>
          <h1>Finance Trading</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ipsum egestas tellus consectetur tincidunt. Vivamus sit amet urna in nibh porttitor auctor nec quis ipsum. Mauris erat ex, posuere a iaculis non, rhoncus non odio. Sed dapibus sapien bibendum risus consectetur, vitae commodo nisi convallis. Praesent tempus sit amet nibh feugiat bibendum. Ut rhoncus eros vitae ipsum posuere vehicula. Suspendisse in bibendum nulla, non congue dui. Nulla et mi faucibus, vestibulum lacus non, maximus nibh.

Sed at enim purus. Curabitur vel dui nibh. Sed rutrum, enim venenatis dictum egestas, velit enim volutpat lorem, eu efficitur neque ante vitae purus. Morbi scelerisque massa tellus, vitae fringilla dolor lacinia ac. Nunc fermentum ex et sapien viverra scelerisque. Donec in tellus fermentum urna venenatis dapibus vitae ut tortor. Nullam vulputate pulvinar molestie. Donec eu mauris nec velit pellentesque tincidunt eget ut quam.

Nulla sollicitudin venenatis tellus vel scelerisque. Curabitur id turpis at massa scelerisque consequat. Aliquam mollis est eget magna maximus, vitae condimentum tellus gravida. Vestibulum vestibulum urna quis lectus egestas dictum. Vivamus arcu lorem, finibus facilisis urna ac, lobortis varius magna. Donec et elit ac tortor molestie pellentesque at malesuada erat. Quisque laoreet, mauris sed hendrerit eleifend, purus neque feugiat arcu, eget mollis nisi ipsum in urna. Curabitur consectetur risus velit, et sollicitudin felis congue ac. Duis tempus tellus hendrerit, congue dolor quis, porttitor magna.

Vivamus est odio, varius vitae iaculis non, tristique et elit. Sed ligula mi, vulputate quis mi sed, ultricies pretium erat. Curabitur consectetur feugiat sapien, et cursus lectus. Duis volutpat eget tellus eget varius. Quisque euismod felis lectus, sagittis euismod turpis luctus ultrices. Sed vitae sapien lobortis, iaculis velit quis, bibendum lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed congue purus dapibus enim imperdiet porta tempus eget est. Nam fermentum sapien ut accumsan congue. Praesent pellentesque vestibulum justo non congue. Ut luctus sit amet tortor non vestibulum.

Integer dui nisl, pretium et nulla ac, tincidunt pulvinar massa. Duis sed quam lacus. Phasellus nisl sem, fringilla sit amet porttitor a, sagittis ut metus. Aliquam ut purus elementum, consectetur turpis sodales, feugiat nisl. Curabitur elementum turpis nisl, et facilisis mauris feugiat at. In tempus sagittis tempus. Etiam consequat eu tortor ac commodo. Nulla ultricies varius cursus. Praesent metus libero, sagittis nec orci ut, congue volutpat turpis. Vestibulum eget erat bibendum, vestibulum dolor in, tempor dui. Proin molestie at lacus pharetra pretium. Phasellus pharetra ligula ante, at tristique mauris aliquam non. Nullam eros nulla, blandit at commodo id, ullamcorper quis libero. Suspendisse ut ante vitae orci vulputate tincidunt ac eget nibh.


          </p>
        </div>
        <div className={styles.content}>
          <h1>Our Mission</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ipsum egestas tellus consectetur tincidunt. Vivamus sit amet urna in nibh porttitor auctor nec quis ipsum. Mauris erat ex, posuere a iaculis non, rhoncus non odio. Sed dapibus sapien bibendum risus consectetur, vitae commodo nisi convallis. Praesent tempus sit amet nibh feugiat bibendum. Ut rhoncus eros vitae ipsum posuere vehicula. Suspendisse in bibendum nulla, non congue dui. Nulla et mi faucibus, vestibulum lacus non, maximus nibh.

Sed at enim purus. Curabitur vel dui nibh. Sed rutrum, enim venenatis dictum egestas, velit enim volutpat lorem, eu efficitur neque ante vitae purus. Morbi scelerisque massa tellus, vitae fringilla dolor lacinia ac. Nunc fermentum ex et sapien viverra scelerisque. Donec in tellus fermentum urna venenatis dapibus vitae ut tortor. Nullam vulputate pulvinar molestie. Donec eu mauris nec velit pellentesque tincidunt eget ut quam.

Nulla
          </p>
        </div>
        <div className={styles.content}>
          <h1>Our Team</h1> 
          {/* TODO: About us component */}
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ipsum egestas tellus consectetur tincidunt. Vivamus sit amet urna in nibh porttitor auctor nec quis ipsum. Mauris erat ex, posuere a iaculis non, rhoncus non odio. Sed dapibus sapien bibendum risus consectetur, vitae commodo nisi convallis. Praesent tempus sit amet nibh feugiat bibendum. Ut rhoncus eros vitae ipsum posuere vehicula. Suspendisse in bibendum nulla, non congue dui. Nulla et mi faucibus, vestibulum lacus non, maximus nibh.

Sed at enim purus. Curabitur vel dui nibh. Sed rutrum, enim venenatis dictum egestas, velit enim volutpat lorem, eu efficitur neque ante vitae purus. Morbi scelerisque massa tellus, vitae fringilla dolor lacinia ac. Nunc fermentum ex et sapien viverra scelerisque. Donec in tellus fermentum urna venenatis dapibus vitae ut tortor. Nullam vulputate pulvinar molestie. Donec eu mauris nec velit pellentesque tincidunt eget ut quam.
          </p>
          <Aboutus/>
        </div>
        <div className={styles.content}>
          <h1>Contact Us</h1>
          <Contactus/>
        </div>
        <div className={styles.footer}></div>
    </motion.div>
  )
}