"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="m-2">
      <ul className="  flex flex-row   justify-between  overflow-x-scroll ...  ">
        <li className="animate-left-to-right " >
          <Image
            src={
              "https://cdn.dribbble.com/userupload/8666506/file/original-e78cdeb58102fdc8a9e2629816083664.png?format=webp&resize=320x240&vertical=center"
            }
            alt="Logo"
            width={350}
            height={300}
          />
          <p>Print</p>
        </li>
        <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/9026657/file/original-adfa133a231cf48cde52bf80bc9b27f5.png?crop=0x0-1600x11000&format=webp&resize=320x240&vertical=center"
            }
            alt="img"
            width={350}
            height={300}
          />
          <p>Branding</p>
        </li>
        {/* <li className="animate-left-to-right">
          <Image />
        </li> */}
        <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/9790147/file/still-f8ab3ea7359bca3fd294c9ec5d52b803.png?format=webp&resize=320x240&vertical=center"
            }
            alt="img"
            width={350}
            height={300}
          />
          <p>Animation</p>
        </li>
        <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/4399984/file/still-70857726eee33ea525bc5bf59fc9aaf2.png?format=webp&resize=314x236&vertical=center"
            }
            alt="img"
            width={350}
            height={300}
          />
          <p>Web Design</p>
        </li>
        <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/3868057/file/still-fb7c8975ce93ddf9e347ce57a7a14ae2.png?format=webp&resize=320x240&vertical=center"
            }
            alt="img"
            width={350}
            height={350}
          />
          <p>Mobile</p>
        </li>
        {/* <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/4399984/file/still-70857726eee33ea525bc5bf59fc9aaf2.png?format=webp&resize=314x236&vertical=center"
            }
            alt="img"
            width={350}
            height={300}
          />
          <p>title</p>
        </li>
        <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/9790147/file/still-f8ab3ea7359bca3fd294c9ec5d52b803.png?format=webp&resize=320x240&vertical=center"
            }
            alt="img"
            width={350}
            height={300}
          />
          <p>title</p>
        </li>
        <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/9180194/file/still-211ed81d278037b670e7edbf84d708e0.png?format=webp&resize=320x240&vertical=center"
            }
            alt="img"
            width={350}
            height={300}
          />
          <p>title</p>
        </li> */}
        <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/8822088/file/original-285cd01784b90d1161d15905a06b433b.png?crop=0x0-3201x2401&format=webp&resize=320x240&vertical=center"
            }
            alt="img"
            width={350}
            height={300}
          />
          <p>Product Design</p>
        </li>
        {/* <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/8822088/file/original-285cd01784b90d1161d15905a06b433b.png?crop=0x0-3201x2401&format=webp&resize=320x240&vertical=center"
            }
            alt="img"
            width={350}
            height={300}
          />
          <p>title</p>
        </li> */}
        <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/9467262/file/original-bbd4859a3793775a77d9e7d4a6e02a70.jpg?format=webp&resize=320x240&vertical=center"
            }
            alt="img"
            width={350}
            height={300}
          />
          <p>Illustration</p>
        </li>
        <li className="animate-left-to-right">
          <Image
            src={
              "https://cdn.dribbble.com/userupload/9180194/file/still-211ed81d278037b670e7edbf84d708e0.png?format=webp&resize=320x240&vertical=center"
            }
            alt="img"
            width={350}
            height={300}
          />
          <p>Typography</p>
        </li>
      </ul>

      <ul className="flex items-center justify-start space-x-6">
        <li className="italic  hover:opacity-20  hover:text-orange-300 font-bold font-mono text-4xl">
          Dribbble
        </li>
        <li>For designers</li>
        <li>Hire talent</li>
        <li>Inspiration</li>
        <li>Advertising</li>
        <li>Blog</li>
        <li>About</li>
        <li>Careers</li>
        <li className="flex-1">Support</li>

        <li className="text-2xl">
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li className="text-2xl">
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li className="text-2xl">
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li className="text-2xl">
          <FontAwesomeIcon icon={faPinterest} />
        </li>
      </ul>
      <ul className="my-32 flex items-center justify-start space-x-6 font-mono-sans ...">
        <li>© 2023 Dribbble.</li>
        <li>Terms</li>
        <li>Privacy</li>
        <li className="flex-1">Cookies</li>
        <li>Jobs</li>
        <li>Designers</li>
        <li>Freelancers</li>
        <li>Tags</li>
        <li>Places</li>
        <li>Resources</li>
      </ul>
    </div>
  );
};

export default Footer;
