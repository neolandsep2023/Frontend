import { ButtonPrimary, FlexDir, Form, MiniCards } from '../../components/StyleComponents'
import { useThemeApp } from '../../context/themeContext';
import './Home.css'

export const Home = () => {
    const { toggleTheme } = useThemeApp();

  return (
    <div>Home

<ButtonPrimary  variant={"normal"} size={"large"} onClick={toggleTheme}>TOGGLE THEME</ButtonPrimary>
<FlexDir direction={"row"}>
    <h1>hola</h1>
    <h1>que tal</h1>
    </FlexDir>

<FlexDir direction={"column"}>
<Form width={"80vw"} >
  <FlexDir direction={"column"} >
  <div>
    hola
  </div>
  <div>
    hola
  </div>
  <div>
    hola
  </div>
  <div>
    hola
  </div>
  <div>
    hola
  </div>
  <input></input>
  <label>INPUT</label>
  </FlexDir>
</Form>


</FlexDir>

<FlexDir mediaqueryDir={"column"}>
<MiniCards>
  <h1>HOLAAAA</h1>
  <img  alt="hello kitty" src="https://mma.prnewswire.com/media/2261098/Hello_Kitty_50th_Logo.jpg?p=twitter"/>
</MiniCards>

<MiniCards>
  <h1>HOLAAAA</h1>
  <img  alt="hello kitty" src="https://addons-media.operacdn.com/media/CACHE/images/themes/05/125405/1.0-rev1/images/0fd5423c-b863-4816-8995-321ff9716aaf/b6212ff0ee5d9abccee7771b10a7c49c.jpg"/>
</MiniCards>
<MiniCards>
  <h1>HOLAAAA</h1>
  <img  alt="hello kitty" src="https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-760w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg?ramen_itok=iqwQftIcTf"/>
</MiniCards>
</FlexDir>

    </div>
  )
}
