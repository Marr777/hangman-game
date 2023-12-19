import { motion } from 'framer-motion';

export default function Transition({children} : React.PropsWithChildren) {
  return (
    <motion.div initial={{ opacity: 0, translateY: -20}} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7}} >
      {children}
    </motion.div>
  );
}

