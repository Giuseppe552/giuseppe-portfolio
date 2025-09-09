import { motion } from "framer-motion";
import Link from "next/link";

export default function HomepageProjectsCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-16 flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">See My Latest Projects</h2>
      <p className="text-zinc-400 mb-6 text-center max-w-xl">
        Explore my open-source work, automation tools, and privacy-minded apps. Every project is built with clean code and measurable outcomes.
      </p>
      <Link
        href="/projects"
        className="bg-emerald-500 text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-emerald-400 transition"
      >
        View Projects
      </Link>
    </motion.div>
  );
}
