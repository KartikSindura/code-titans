import styles from '../styles/Layout.module.css'
import { motion } from 'framer-motion'

export default function Contactus() {
  return (

    <motion.div
      target="_blank"
      href='/'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}>
      <code>
        {/* <div className={styles.content}> */}
          <form>
            <div className={styles.formcontainer}>
              <label>Name</label>
              <input id='nameField' className={styles.input} type="text" maxLength={50} placeholder="Name" />
              {/* <input id='nameField' className={styles.input} type="text" maxLength={50} placeholder="Name" defaultValue="kartik"/> */}
            </div>
            <div className={styles.formcontainer}>
              <label>Email</label>
              <input id='emailField' className={styles.input} type="text" maxLength={70} placeholder="Email" />
              {/* <input id='emailField' className={styles.input} type="text" maxLength={70} placeholder="Email" defaultValue="kartik.sindura@gmail.com"/> */}
            </div>
            <div className={styles.formcontainer}>
              <label>Message</label>
              <textarea id='messageField' className={styles.message} type="textarea" placeholder="Type a message" />
              {/* <textarea id='messageField' className={styles.message} type="textarea" placeholder="Type a message" defaultValue="kartik"/> */}
            </div>
            <div className={styles.formcontainer}>
              <button className={styles.button} type="button" >Submit</button>
            </div>
          </form>
          <div className={styles.footer}></div>
        {/* </div> */}
      </code>
    </motion.div>
  )
}
