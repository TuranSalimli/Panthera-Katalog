import { useState, useCallback, useEffect } from "react";
import "./App.css";
import { FaInstagram } from "react-icons/fa";

const flowers = [
  { id: 1, name: "Home", price: "₼120", category: "buket", image: "images/Home.jpg.webp" },
  { id: 2, name: "Lily World", price: "₼150", category: "buket", image: "images/Lily World.jpg.webp" },
  { id: 3, name: "Soft Life", price: "₼230", category: "buket", image: "images/Soft Life.jpg.webp" },
  { id: 4, name: "Paeony Utopia", price: "₼510", category: "buket", image: "images/Paeony Utopia.webp" },
  { id: 5, name: "Red Box", price: "₼350", category: "kompozisiya", image: "images/Red Box.jpg.webp" },
  { id: 6, name: "Time to Fall", price: "₼265", category: "kompozisiya", image: "images/Time to Fall.webp" },
  { id: 7, name: "Bouquet", price: "₼90", category: "buket", image: "images/Bouquet 002.webp" },
  { id: 8, name: "Electric Silver", price: "₼135", category: "buket", image: "images/Electric Silver.jpg.webp" },
  { id: 9, name: "Far Away", price: "₼190", category: "kompozisiya", image: "images/Far Away.jpg.webp" },
  { id: 10, name: "Just Happy", price: "₼180", category: "buket", image: "images/Just Happy.jpg.webp" },
  { id: 11, name: "Pink Wave", price: "₼210", category: "kompozisiya", image: "images/Pink Wave.jpg.webp" },
  { id: 12, name: "Silver Light", price: "₼170", category: "buket", image: "images/Silver Light.jpg.webp" },
  { id: 13, name: "Yellow Love", price: "₼130", category: "kompozisiya", image: "images/Yellow Love.jpg.webp" },
  { id: 14, name: "Mix Bouquet", price: "₼350", category: "buket", image: "images/Mix Bouquet.webp" },
  { id: 15, name: "Jasmin", price: "₼70", category: "buket", image: "images/Jasmin.webp" },
  { id: 16, name: "Jasmin Wave", price: "₼200", category: "buket", image: "images/Jasmin Wave.webp" },
  { id: 17, name: "Yellow Dance", price: "₼130", category: "buket", image: "images/130 fdf.jpg.webp" },
  { id: 18, name: "Charm", price: "₼140", category: "kompozisiya", image: "images/Charm.jpg.webp" },
  { id: 19, name: "Green Confused", price: "₼250", category: "kompozisiya", image: "images/Green Confused.jpg.webp" },
  { id: 20, name: "Lonely", price: "₼120", category: "buket", image: "images/Lonely.webp" },
  { id: 21, name: "Invesible", price: "₼115", category: "buket", image: "images/Invesible.jpg.webp" },
  { id: 22, name: "Pink Dance", price: "₼170", category: "buket", image: "images/Pink dance.webp" },
  { id: 23, name: "Lucky", price: "₼120", category: "kompozisiya", image: "images/Lucky.jpg.webp" },
  { id: 24, name: "Memories", price: "₼100", category: "buket", image: "images/Memories.jpg.webp" },
  { id: 25, name: "Purple Moon", price: "₼80", category: "buket", image: "images/Purple Moon.jpg.webp" },
  { id: 26, name: "Silent", price: "₼200", category: "kompozisiya", image: "images/Silent.webp" },
  { id: 27, name: "Aveline", price: "₼160", category: "buket", image: "images/Aveline.jpg.webp" },
  { id: 28, name: "Rise", price: "₼100", category: "buket", image: "images/Rise.jpg.webp" },
  { id: 29, name: "Saturn", price: "₼195", category: "buket", image: "images/Saturn.jpg.webp" },
  { id: 30, name: "Red Dream", price: "₼90", category: "buket", image: "images/Red Dream.webp" },
  { id: 31, name: "Soul", price: "₼85", category: "buket", image: "images/Soul.jpg.webp" },
  { id: 32, name: "Pink Souls", price: "₼155", category: "buket", image: "images/Pink Souls.jpg.webp" },
  { id: 33, name: "Story", price: "₼145", category: "buket", image: "images/Story.jpg.webp" },
  { id: 34, name: "Time", price: "₼90", category: "buket", image: "images/Time.jpg.webp" },
  { id: 35, name: "True Love", price: "₼190", category: "kompozisiya", image: "images/True Love.jpg.webp" },
  { id: 36, name: "White Life", price: "₼120", category: "gelin-buketleri", image: "images/White Life.jpg.webp" },
  { id: 37, name: "Yellow Lily", price: "₼100", category: "buket", image: "images/Yellow Lily.jpg.webp" },
  { id: 38, name: "Venera Statue", price: "₼812.50", category: "heykel", image: "images/Venera Statue.jpg.webp" },
  { id: 39, name: "Twin Deers E", price: "₼197.50", category: "heykel", image: "images/Twin Deers E .jpg.webp" },
  { id: 40, name: "Monkey Musician", price: "₼125", category: "heykel", image: "images/Monkey Musician .jpg.webp" },
  { id: 41, name: "Last Dance E", price: "₼162.50", category: "heykel", image: "images/Last Dance E.jpg.webp" },
  { id: 42, name: "Iron Orbit Clock E", price: "₼222.5", category: "heykel", image: "images/Iron Orbit Clock E .jpg.webp" },
  { id: 43, name: "India Lady Tiger", price: "₼107.50", category: "heykel", image: "images/India Lady Tiger .jpg.webp" },
  { id: 44, name: "Egypt Panthera", price: "₼100", category: "heykel", image: "images/Egypt Panthera .jpg.webp" },
  { id: 45, name: "Ebru Panthera", price: "₼200", category: "heykel", image: "images/Ebru Panthera.jpg.webp" },
  { id: 46, name: "Dancing Human E", price: "₼247.50", category: "heykel", image: "images/Dancing Human E.jpg.webp" },
  { id: 47, name: "Dou Neon Pup", price: "₼197.50", category: "heykel", image: "images/Big Neon Pup.jpg.webp" },
  { id: 48, name: "Big Boy Monkey", price: "₼95", category: "heykel", image: "images/BIg Boy Monkey .jpg.webp" },
  { id: 49, name: "White Aphrodite", price: "₼317.50", category: "vazo", image: "images/Vhite Afrodit.jpg.webp" },
  { id: 50, name: "Antique Clock", price: "₼175", category: "heykel", image: "images/Antquie Clock.jpg.webp" },
  { id: 51, name: "Ballerina", price: "₼187.50", category: "heykel", image: "images/Ballerina.jpg.webp" },
  { id: 52, name: "Bermuda Clock", price: "₼150", category: "heykel", image: "images/Bermuda Clock.jpg.webp" },
  { id: 53, name: "Black Night E(b)", price: "₼75", category: "vazo", image: "images/Black Night E(b).jpg.webp" },
  { id: 54, name: "Black Night Mini E(v)", price: "₼55", category: "vazo", image: "images/Black Night Mini E(v).jpg.webp" },
  { id: 55, name: "Black Night Mini E", price: "₼55", category: "vazo", image: "images/Black Night Mini E.jpg.webp" },
  { id: 56, name: "Blue Fire Vase (01)", price: "₼150", category: "vazo", image: "images/Blue Fire Vase(01).jpg.webp" },
  { id: 57, name: "Blue Fire Vision", price: "₼187.50", category: "vazo", image: "images/Blue Fire Vision.jpg.webp" },
  { id: 58, name: "Blue Fire", price: "₼150", category: "vazo", image: "images/Blue Fire.jpg.webp" },
  { id: 59, name: "Colm Clock", price: "₼500", category: "saat", image: "images/Colm Clock.jpg.webp" },
  { id: 60, name: "Cubic Man E", price: "₼100", category: "heykel", image: "images/Cubic Man E.jpg.webp" },
  { id: 61, name: "Double Minaret Clock", price: "₼575", category: "heykel", image: "images/Double Minaret Clock.jpg.webp" },
  { id: 62, name: "Drop Vase", price: "₼275", category: "vazo", image: "images/Drop Vase.jpg.webp" },
  { id: 63, name: "Earth Time", price: "₼97.5", category: "heykel", image: "images/Earth Time.jpg.webp" },
  { id: 64, name: "Elephant's bone Vase", price: "₼300", category: "vazo", image: "images/Elephant`s bone Vase.jpg.webp" },
  { id: 65, name: "Gold At Night E(b)", price: "₼67.50", category: "vazo", image: "images/Gold At Night E(b).jpg.webp" },
  { id: 66, name: "Gold Ivy Vase(01)", price: "₼150", category: "vazo", image: "images/Gold lvy Vase(01).jpg.webp" },
  { id: 67, name: "Gold Woman", price: "₼300", category: "heykel", image: "images/Gold Voman.jpg.webp" },
  { id: 68, name: "Horse Head", price: "₼142.50", category: "heykel", image: "images/Horse Head.jpg.webp" },
  { id: 69, name: "Indian Double Elephant", price: "₼300", category: "heykel", image: "images/İndian Double Elephant.jpg.webp" },
  { id: 70, name: "Iron Time E", price: "₼110", category: "heykel", image: "images/İron Time E.jpg.webp" },
  { id: 71, name: "Japanese Flower Vase", price: "₼175", category: "vazo", image: "images/Japanse Flover Vase.jpg.webp" },
  { id: 72, name: "Japanese Vase", price: "₼300", category: "vazo", image: "images/Japanse Vase.jpg.webp" },
  { id: 73, name: "Little Monstera Leaf", price: "₼100", category: "heykel", image: "images/Little Monstera Leaf.jpg.webp" },
  { id: 74, name: "Molecul Girl", price: "₼222.50", category: "heykel", image: "images/Molecul Girl.jpg.webp" },
  { id: 75, name: "Monstera Leaf", price: "₼137.50", category: "heykel", image: "images/Monstear Leaf.jpg.webp" },
  { id: 76, name: "Triple Gold Birds", price: "₼400", category: "heykel", image: "images/Triple Gold Brids.jpg.webp" },
  { id: 77, name: "Little Gold Fish", price: "₼95", category: "heykel", image: "images/Little Gold Fish.webp" },
  { id: 78, name: "Swarovski Cuckoo", price: "₼322.50", category: "heykel", image: "images/Swarovksi Cuckoo.webp" },
  { id: 79, name: "Jupiter Man", price: "₼137.50", category: "heykel", image: "images/Jupiter Man.webp" },
  { id: 80, name: "Big The Mask ", price: "₼162.50", category: "heykel", image: "images/Big The Mask.webp" },
  { id: 81, name: "Mystical Egyptian Cat E", price: "₼162.50", category: "heykel", image: "images/Mystical Egyptian Cat E.jpg.webp" },
  { id: 82, name: "Circual Man E", price: "₼100", category: "heykel", image: "images/Circual Man E.jpg.webp" },
  { id: 83, name: "Marble Clock E", price: "₼172.50", category: "heykel", image: "images/Marble Clock E.jpg.webp" },
  { id: 84, name: "Tiffany Minaret Clock", price: "₼325", category: "heykel", image: "images/Tiffany Minaret Clock.jpg.webp" },
  { id: 85, name: "Tiffany Retro Clock", price: "₼275", category: "heykel", image: "images/Tiffany Retro Clock.jpg.webp" },
  { id: 86, name: "Music Note", price: "₼95", category: "heykel", image: "images/Music Note.jpg .webp" },
  { id: 87, name: "Music Note Treble", price: "₼95", category: "heykel", image: "images/Music Note Treble.jpg.webp" },
  { id: 88, name: "Music Note Eighth Note", price: "₼95", category: "heykel", image: "images/Music Note Eighth Note.jpg.webp" },
  { id: 89, name: "White Mondeals Vase", price: "₼145", category: "vazo", image: "images/Vhite Mondeals Vase.jpg.webp" },
  { id: 90, name: "White Mondeals Vase(01) E", price: "₼145", category: "vazo", image: "images/Vhite Mondeals Vase(01).jpg.webp" },
  { id: 91, name: "White Night E", price: "₼75", category: "vazo", image: "images/Vhite Night E.jpg .webp" },
  { id: 92, name: "Gold At Night E", price: "₼67.50", category: "vazo", image: "images/Gold At Night E.jpg.webp" },
  { id: 93, name: "Little Gold lvy Vase(01)", price: "₼150", category: "vazo", image: "images/Little Gold lvy Vase(01).jpg.webp" },
  { id: 94, name: "Sophia Loren Roses", price: "₼300", category: "buket", image: "images/Sophia Loren Roses .jpg.webp" },
  { id: 95, name: "Royal", price: "₼250", category: "buket", image: "images/Royal.jpg.webp" },
  { id: 96, name: "White 101 Tulip", price: "₼400", category: "buket", image: "images/White 101 Tulip.jpg.webp" },
  { id: 97, name: "Wild Meadow", price: "₼150", category: "kompozisiya", image: "images/Wild Meadow.jpg.webp" },
  { id: 98, name: "Velour", price: "₼290", category: "kompozisiya", image: "images/Velour.jpg.webp" },
  { id: 99, name: "Yellow Tulip", price: "₼155", category: "buket", image: "images/Yellow Tulip.jpg.webp" },
  { id: 100, name: "The Crown", price: "₼220", category: "buket", image: "images/The Crown.jpg.webp" },
  { id: 101, name: "Tulip Box", price: "₼590", category: "kompozisiya", image: "images/Tulip Box .jpg.webp" },
  { id: 102, name: "Wisp", price: "₼350", category: "buket", image: "images/Wisp.jpg.webp" },
  { id: 103, name: "Vire", price: "₼350", category: "kompozisiya", image: "images/Vire.jpg.webp" },
  { id: 104, name: "Trace", price: "₼390", category: "kompozisiya", image: "images/Trace.jpg.webp" },
  { id: 105, name: "Vera", price: "₼450", category: "kompozisiya", image: "images/Vera.jpg.webp" },
  { id: 106, name: "The Muse", price: "₼150", category: "buket", image: "images/The Muse.jpg.webp" },
  { id: 107, name: "Senere", price: "₼300", category: "buket", image: "images/Senere.jpg.webp" },
  { id: 108, name: "White Peony", price: "₼420", category: "buket", image: "images/White Peony.jpg.webp" },
  { id: 109, name: "Pink Love", price: "₼200", category: "kompozisiya", image: "images/Pink LOVE.jpg.webp" },
  { id: 110, name: "Pink Petal", price: "₼160", category: "kompozisiya", image: "images/Pink Petal .jpg.webp" },
  { id: 111, name: "Red and Pink", price: "₼400", category: "buket", image: "images/Red and Pink.jpg.webp" },
  { id: 112, name: "Pink Peony", price: "₼400", category: "buket", image: "images/Pink Peony.jpg.webp" },
  { id: 113, name: "Prestige", price: "₼250", category: "buket", image: "images/Prestige.jpg.webp" },
  { id: 114, name: "Purple 101 Tulip", price: "₼400", category: "buket", image: "images/Purple 101 Tulip.jpg.webp" },
  { id: 115, name: "O'Hara", price: "₼250", category: "buket", image: "images/O'Hara.jpg.webp" },
  { id: 116, name: "Pink Solis", price: "₼350", category: "buket", image: "images/Pink Solis.jpg.webp" },
  { id: 117, name: "Purple Tulip", price: "₼210", category: "buket", image: "images/Purple Tulip.jpg.webp" },
  { id: 118, name: "Red Tulip 101", price: "₼400", category: "buket", image: "images/Red Tulip 101.jpg.webp" },
  { id: 119, name: "Red World", price: "₼700", category: "buket", image: "images/Red World.jpg.webp" },
  { id: 120, name: "Pink Tulip", price: "₼210", category: "buket", image: "images/Pink Tulip.jpg.webp" },
  { id: 121, name: "Pink O'hara 101", price: "₼600", category: "buket", image: "images/Pink O'hara 101.jpg.webp" },
  { id: 122, name: "Pink Tulip Box", price: "₼620", category: "kompozisiya", image: "images/Pink Tulip Box.jpg.webp" },
  { id: 123, name: "Pure", price: "₼200", category: "buket", image: "images/Pure.jpg.webp" },
  { id: 124, name: "Red Line", price: "₼400", category: "kompozisiya", image: "images/Red Line.jpg.webp" },
  { id: 125, name: "Roses Luciana", price: "₼600", category: "buket", image: "images/Roses Luciana.jpg.webp" },
  { id: 126, name: "Pink Box", price: "₼550", category: "kompozisiya", image: "images/Pink Box.jpg.webp" },
  { id: 127, name: "Pink O'hara", price: "₼300", category: "buket", image: "images/Pink O'hara.jpg.webp" },
  { id: 128, name: "Morning Light", price: "₼300", category: "kompozisiya", image: "images/Morning Light.jpg.webp" },
  { id: 129, name: "Lavender Dream", price: "₼200", category: "buket", image: "images/Lavender Dream.jpg.webp" },
  { id: 130, name: "Lily's World", price: "₼190", category: "buket", image: "images/Lily's World.jpg.webp" },
  { id: 131, name: "Lior", price: "₼350", category: "buket", image: "images/Lior.jpg.webp" },
  { id: 132, name: "Mix Tulip 2", price: "₼200", category: "buket", image: "images/Mix Tulip 2.jpg.webp" },
  { id: 133, name: "Mix Tulip", price: "₼200", category: "buket", image: "images/Mix Tulip.jpg.webp" },
  { id: 134, name: "Morning Dew", price: "₼200", category: "buket", image: "images/Morning Dew.jpg.webp" },
  { id: 135, name: "LOVE", price: "₼200", category: "kompozisiya", image: "images/LOVE .jpg.webp" },
  { id: 136, name: "Green Ocean", price: "₼170", category: "buket", image: "images/Green Ocean.jpg.webp" },
  { id: 137, name: "Harmony", price: "₼400", category: "buket", image: "images/Harmony .jpg.webp" },
  { id: 138, name: "Her Desire", price: "₼300", category: "buket", image: "images/Her Desire.jpg.webp" },
  { id: 139, name: "Madam Bombastic", price: "₼220", category: "buket", image: "images/Madam Bombastic .jpg.webp" },
  { id: 140, name: "Mirage", price: "₼350", category: "buket", image: "images/Mirage.jpg.webp" },
  { id: 141, name: "Mix Tulip", price: "₼400", category: "buket", image: "images/Mix Tulip .jpg.webp" },
  { id: 142, name: "Nost", price: "₼350", category: "buket", image: "images/Nost.jpg.webp" },
  { id: 143, name: "O'hara 101", price: "₼600", category: "buket", image: "images/O'hara 101.jpg.webp" },
  { id: 144, name: "Grand", price: "₼250", category: "buket", image: "images/Grand.jpg.webp" },
  { id: 145, name: "Hard Dream", price: "₼600", category: "buket", image: "images/334.jpg.webp" },
  { id: 146, name: "Alba", price: "₼400", category: "buket", image: "images/Alba.jpg.webp" },
  { id: 147, name: "Aria", price: "₼400", category: "kompozisiya", image: "images/Aria .jpg.webp" },
  { id: 148, name: "Brume", price: "₼350", category: "buket", image: "images/Brume.jpg.webp" },
  { id: 149, name: "Dancing Petals", price: "₼300", category: "buket", image: "images/Dancing Petals.jpg.webp" },
  { id: 150, name: "101 Tulip", price: "₼400", category: "buket", image: "images/101 Tulip .jpg.webp" },
  { id: 151, name: "Elysian", price: "₼300", category: "buket", image: "images/Elysian.jpg.webp" },
  { id: 152, name: "Fleur", price: "₼350", category: "buket", image: "images/Fleur.jpg.webp" },
  { id: 153, name: "Drift", price: "₼350", category: "buket", image: "images/Drift.jpg.webp" },
  { id: 154, name: "Treasures", price: "₼550", category: "buket", image: "images/329.jpg.webp" },
  { id: 155, name: "Blue Roses 101", price: "₼700", category: "buket", image: "images/Blue Roses 101.jpg.webp" },
  { id: 156, name: "Revenant", price: "₼150", category: "buket", image: "images/264.jpg.webp" },
  { id: 157, name: "301 Roses", price: "₼1200", category: "buket", image: "images/301 Roses .jpg.webp" },
  { id: 158, name: "Pink Flash", price: "₼320", category: "buket", image: "images/325.jpg.webp" },
  { id: 159, name: "Aster", price: "₼300", category: "buket", image: "images/Aster .jpg.webp" },
  { id: 160, name: "Bliss", price: "₼550", category: "buket", image: "images/Bliss.jpg.webp" },
  { id: 161, name: "Blooming Heart", price: "₼300", category: "buket", image: "images/Blooming Heart.jpg.webp" },
  { id: 162, name: "Eden", price: "₼200", category: "buket", image: "images/Eden.jpg.webp" },
  { id: 163, name: "Elara", price: "₼200", category: "buket", image: "images/Elara.jpg.webp" },
  { id: 164, name: "Elegance", price: "₼170", category: "kompozisiya", image: "images/Elegance.jpg.webp" },
  { id: 165, name: "Dune", price: "₼120", category: "buket", image: "images/Dune.jpg.webp" },
  { id: 166, name: "Coral", price: "₼90", category: "kompozisiya", image: "images/Coral.jpg.webp" },
  { id: 167, name: "Dawn", price: "₼70", category: "buket", image: "images/Dawn.jpg.webp" },
  { id: 168, name: "Haven", price: "₼120", category: "buket", image: "images/Haven.jpg.webp" },
  { id: 169, name: "Heaven", price: "₼90", category: "buket", image: "images/Heaven.jpg.webp" },
  { id: 170, name: "Brisk", price: "₼110", category: "buket", image: "images/Brisk.jpg.webp" },
  { id: 171, name: "Lily", price: "₼60", category: "buket", image: "images/Lily.jpg.webp" },
  { id: 172, name: "Fable", price: "₼50", category: "buket", image: "images/Fable.jpg.webp" },
  { id: 173, name: "Eira", price: "₼90", category: "buket", image: "images/Eira.jpg.webp" },
  { id: 174, name: "Love 1", price: "₼140", category: "kompozisiya", image: "images/Love .jpg (1).webp" },
  { id: 175, name: "Citrine", price: "₼115", category: "buket", image: "images/Citrine.jpg.webp" },
  { id: 176, name: "Glade", price: "₼75", category: "buket", image: "images/Glade.jpg.webp" },
  { id: 177, name: "Blue State", price: "₼55", category: "buket", image: "images/Blue State .jpg.webp" },
  { id: 178, name: "Eon", price: "₼130", category: "kompozisiya", image: "images/Eon.jpg.webp" },
  { id: 179, name: "Asteria", price: "₼110", category: "buket", image: "images/Asteria.jpg.webp" },
  { id: 180, name: "Pink Heaven", price: "₼135", category: "kompozisiya", image: "images/Pink Heaven.jpg.webp" },
  { id: 181, name: "Pink Lily", price: "₼70", category: "buket", image: "images/pink Lily .jpg.webp" },
  { id: 182, name: "Seraphis", price: "₼110", category: "buket", image: "images/Seraphis.jpg.webp" },
  { id: 183, name: "Snow Tulip", price: "₼70", category: "buket", image: "images/Snow Tulip.jpg.webp" },
  { id: 184, name: "White Rift", price: "₼55", category: "buket", image: "images/White Rift.jpg.webp" },
  { id: 185, name: "Lumen", price: "₼95", category: "buket", image: "images/Lumen.jpg.webp" },
  { id: 186, name: "Marble", price: "₼140", category: "buket", image: "images/Marble.jpg.webp" },
  { id: 187, name: "Mix Red", price: "₼65", category: "buket", image: "images/Mix Red.jpg.webp" },
  { id: 188, name: "Mix Pink", price: "₼70", category: "buket", image: "images/Mix Pink.jpg.webp" },
  { id: 189, name: "Quill", price: "₼110", category: "buket", image: "images/Quill.jpg.webp" },
  { id: 190, name: "Rune", price: "₼110", category: "buket", image: "images/Rune.jpg.webp" },
  { id: 191, name: "Vireo", price: "₼120", category: "buket", image: "images/Vireo.jpg.webp" },
  { id: 192, name: "White Jasmine", price: "₼110", category: "buket", image: "images/White Jasmine.jpg.webp" },
  { id: 193, name: "Tempest", price: "₼140", category: "buket", image: "images/Tempest.jpg.webp" },
  { id: 194, name: "Prism", price: "₼120", category: "buket", image: "images/Prism.jpg.webp" },
  { id: 195, name: "Red and White Mix", price: "₼130", category: "buket", image: "images/Red and White mix.jpg.webp" },
  { id: 196, name: "Vellum", price: "₼110", category: "buket", image: "images/Vellum.jpg.webp" },
  { id: 197, name: "Mix Tulip Bouquet", price: "₼90", category: "buket", image: "images/Mix Tulip Bouquet.jpg.webp" },
  { id: 198, name: "Myth", price: "₼55", category: "buket", image: "images/Myth.jpg.webp" },
  { id: 199, name: "Rivulet", price: "₼120", category: "buket", image: "images/Rivulet.jpg.webp" },
  { id: 200, name: "Valea", price: "₼150", category: "kompozisiya", image: "images/Valea.jpg.webp" },
  { id: 201, name: "Aura No. 01", price: "₼230", category: "buket", image: "images/Aura No. 01.jpg.webp" },
  { id: 202, name: "Selene", price: "₼200", category: "kompozisiya", image: "images/Selene.jpg.webp" },
  { id: 203, name: "Pink Hype", price: "₼150", category: "buket", image: "images/Pink Hype.jpg.webp" },
  { id: 204, name: "Look", price: "₼160", category: "buket", image: "images/Look.jpg.webp" },
  { id: 205, name: "Pink Dream", price: "₼150", category: "buket", image: "images/Pink Dream.jpg.webp" },
  { id: 206, name: "Harmony", price: "₼100", category: "buket", image: "images/Harmony.jpg.webp" },
  { id: 207, name: "Bloom No. 01", price: "₼260", category: "buket", image: "images/Bloom No. 01.jpg.webp" },
  { id: 208, name: "Bouquet No. 02", price: "₼250", category: "buket", image: "images/Bouquet No.02.jpg.webp" },
  { id: 209, name: "Hope", price: "₼160", category: "buket", image: "images/Hope.jpg.webp" },
  { id: 210, name: "Aura No. 03", price: "₼160", category: "buket", image: "images/Aura No. 03.jpg.webp" },
  { id: 211, name: "Madame", price: "₼200", category: "buket", image: "images/Madame.jpg.webp" },
  { id: 212, name: "Muse No.02", price: "₼90", category: "buket", image: "images/Muse No.02.jpg.webp" },
  { id: 213, name: "Astral", price: "₼225", category: "buket", image: "images/Astral .jpg.webp" },
  { id: 214, name: "Flash", price: "₼190", category: "buket", image: "images/Flash.jpg.webp" },
  { id: 215, name: "Her", price: "₼130", category: "buket", image: "images/Her.jpg.webp" },
  { id: 216, name: "Last Night", price: "₼130", category: "buket", image: "images/Last Night.jpg.webp" },
];

const categories = [
  { key: "buket", label: "Buketlər", img: "images/Buketlər.webp" },
  { key: "kompozisiya", label: "Kompozisiyalar", img: "images/Kompozisiyalar.webp" },
  { key: "gelin-buketleri", label: "Gəlin buketləri", img: "images/Gəlin buketləri.webp" },
  { key: "vazo", label: "Vazolar", img: "images/Vazalar.webp" },
  { key: "heykel", label: "Heykəllər", img: "images/Heykəl.webp" },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [modalSrc, setModalSrc] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const getPriceNumber = (price) => {
    return Number(price.replace("₼", "").replace(",", "."));
  };
  const filtered = flowers.filter((f) => {
    const price = getPriceNumber(f.price);

    const categoryMatch =
      !activeCategory || f.category === activeCategory;

    const minMatch =
      !minPrice || price >= Number(minPrice);

    const maxMatch =
      !maxPrice || price <= Number(maxPrice);

    return categoryMatch && minMatch && maxMatch;
  });
  if (sortOrder === "asc") {
    filtered.sort((a, b) => getPriceNumber(a.price) - getPriceNumber(b.price));
  } else if (sortOrder === "desc") {
    filtered.sort((a, b) => getPriceNumber(b.price) - getPriceNumber(a.price));
  }

  const handleCategoryClick = useCallback((key) => {
    setActiveCategory(key);
    setTimeout(() => {
      document.getElementById("catalogGrid")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, []);

  const handleCardClick = useCallback((flower) => {
    setModalSrc(flower.image);
  }, []);

  const closeModal = useCallback((e) => {
    if (e.target === e.currentTarget) setModalSrc(null);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setModalSrc(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <a href="#catalog" className="scroll-down">↓</a>
        </div>
      </section>

      {/* CATALOG */}
      <section className="section" id="catalog">
        <div className="container">
          <div className="filter-buttons">

            <div className="category-grid">

              {categories.map(cat => (
                <div
                  key={cat.key}
                  className="category-card"
                  data-category={cat.key}
                  onClick={() => handleCategoryClick(cat.key)}
                >
                  <img src={cat.img} alt={cat.label} loading="lazy" decoding="async" />
                </div>
              ))}

            </div>
            { }
            <div className="filter-row">

              { }
              <div className="price-filter">
                <input
                  type="number"
                  placeholder="Min qiymət"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span className="price-separator"></span>
                <input
                  type="number"
                  placeholder="Max qiymət"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>

              { }
              <div className="sort-filter-box">
                <select
                  className="sort-select"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="">Sıralama</option>
                  <option value="asc">Qiymət: Azdan çoxa</option>
                  <option value="desc">Qiymət: Çoxdan aza</option>
                </select>
              </div>
            </div>
          </div>

          <div className="section-title" />

          <div className="catalog-grid" id="catalogGrid">
            {filtered.map(flower => (
              <div
                key={flower.id}
                className="card"
                onClick={() => handleCardClick(flower)}
              >
                <img
                  src={flower.image}
                  alt={flower.name}
                  loading="lazy"
                  decoding="async"
                  fetchpriority="high"
                />
                <div className="card-content">
                  <h3>{flower.name}</h3>
                  <div className="price">{flower.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-box">
              <h3>Panthera</h3>
              <p>Panthera, çiçək və heykəl sənətini birləşdirən unikal bir mağazadır.
                Müştərilərimizə ən gözəl buketlər, kompozisiyalar və heykəllərlə xidmət göstəririk.
                Hər bir məhsulumuz sevgi və diqqətlə hazırlanır, xüsusi günlərinizi daha da unudulmaz etmək üçün.</p>
            </div>
            <div className="footer-box">
              <h3>Əlaqə</h3>
              <p>+994 51 419 11 66</p>
              <p>pantheraflowers@gmail.com</p>
              <p>
                <a
                  href="https://www.instagram.com/panthera.floralstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="social-icon" />
                  {" "}panthera.floralstudio
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/panthera.souvenir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="social-icon" />
                  {" "}panthera.souvenir
                </a>
              </p>
              <p>Bakı, Azərbaycan</p>
            </div>
            <div className="footer-box">
              <h3>Səhifələr</h3>
              <a href="#home">Ana səhifə</a>
              <a href="#catalog">Kataloq</a>
            </div>
          </div>
          <div className="copyright">
            © 2026 Panthera — Bütün hüquqlar qorunur.
          </div>
        </div>
      </footer>
      {modalSrc && (() => {
        const selectedFlower = flowers.find(f => f.image === modalSrc);
        const flowerName = selectedFlower ? selectedFlower.name : "Kataloq məhsulu";
        const flowerPrice = selectedFlower ? selectedFlower.price : "";
        const imageUrl = selectedFlower ? `${window.location.origin}/${selectedFlower.image}` : "";
        const messageText = `Salam! Panthera kataloqundan bu məhsulla maraqlanıram:\n\nMəhsul: ${flowerName}\nQiymət: ${flowerPrice}\nLink: ${imageUrl}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=994558739416&text=${encodeURIComponent(messageText)}`;
        return (
          <div className="image-modal active" onClick={closeModal}>
            <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
              <img src={modalSrc} alt="" loading="lazy" decoding="async" />
              {/* WhatsApp ilə Sifariş Et Düyməsi */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-order-btn"
              >
                WhatsApp ilə Sifariş Et
              </a>
            </div>
          </div>
        );
      })()}
    </>
  );
}
