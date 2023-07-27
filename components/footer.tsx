import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t px-10 py-10 text-white">
      <div className="text-center">
        <h1 className="font-bold text-md">Why Buy From Us!</h1>
        <p className="text-sm mt-2">My Home Decor is a Google verified business</p>
        <p className="text-sm">High Quality Products ✓ Cash On Delivery ✓ Secure Payment ✓. It’s what we’ve always known and what we do exceptionally well.</p>
        <p className="text-sm">My Home Decor - A Trusted Source.</p>
      </div>
      <div className="text-center mt-4">
        <h1 className="font-bold text-md">Decoration and home accessories for the home oasis of wellbeing</h1>
        <p className="text-sm mt-2 text-gray-400">Great that you’ve found your way to us. Make your home something unique. It is the beautiful things in life that also fill living spaces with charm. Even the most stylish rooms and furniture can lack the loving cosiness of your own four walls without the right decoration and home accessories. It is only difficult to choose from the wide range of interior designs that inspire with vases, home decor , wall decorations and many other living ideas. Starting with cozy pillows on the bean bag sofa, to picture frames with loved ones on the walls, to modern decorative objects, a favorite place is created that turns living into life.</p>
      </div>
      <div className="text-center mt-4">
        <h1 className="font-bold text-md">The wonderful world of home decor accessories</h1>
        <p className="text-sm mt-2 text-gray-400">Storage options for the bathroom and living room, cozy bed sheets pillows and cushions in graphic designs table lamps in bedroom table runners for dinning tables or stylish vases are just a few examples of how the beautiful and the practical can be combined in home accessories. Today, tasteful furnishings go far beyond purely decorative knick-knacks - home accessories fill every room with individual accents. Even on the terrace or balcony, the furnishing doesn’t stop there thanks to outdoor-suitable decorations and home accessories. Inside, walls are decorated with pictures and wall mirrors, candle stand invite you to a candlelight dinner and decorative objects complement your own furnishing style to perfection.</p>
      </div>
      <div className="text-center mt-4">
        <h1 className="font-bold text-md">My home is my Castle - home accessories and room decorations from myhomedecor.pk</h1>
        <p className="text-sm mt-2 text-gray-400">Refreshingly different and yet always according to the individual taste - this is how myhomedecor.pk would like to help create a harmonious ambience with decoration and home accessories. Every room and also the favorite place on the terrace and balcony should be filled with homely details that make life even more beautiful. Deco with home decor and room decor accessories can set accents in a mix of styles or blend in harmoniously with the existing style. Shop home decor items from Pakistan’s finest home improvement store online.</p>
      </div>
      <Image 
        className="items-center justify-center mx-auto mb-5"
        src="/footer.png"
        alt="footer"
        width={150}
        height={100}
      />
      <div className="mx-auto">
        <p className="text-center text-xs">
          &copy; 2023 Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
