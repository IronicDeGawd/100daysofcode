import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center sm:text-lg text-purple-200">
      <div className=" flex justify-center items-center m-2 gap-4 mt-4">
        <div>Made with 💝 by IronicDeGawd</div>
        <div className="flex gap-2">
          <a
            className="border-2 border-purple-500 rounded-2xl hover:border-purple-700 hover:scale-110 transition-transform"
            href={"https://x.com/0xironyaditya"}
          >
            <img className="w-7 " src={twitter}></img>
          </a>
          <a
            className="border-2 border-purple-500 rounded-2xl hover:border-purple-700 hover:scale-110 transition-transform"
            href={"https://github.com/ironicdegawd"}
          >
            <img className="w-7" src={github}></img>
          </a>
        </div>
      </div>
      <div>nezukoTV © 2024</div>
      <a
        className="max-w-40 m-2"
        href={"https://www.buymeacoffee.com/ironyaditya"}
        target="_blank"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
          alt="Buy Me A Coffee"
        />
      </a>
    </div>
  );
}
