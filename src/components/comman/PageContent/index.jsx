import React from 'react'
import style from './style.module.scss';
import SectionHeading from '../sectionHeading';

const PageContent = ({sectionGap}) => {
  return (
    <div className={`${style['NewsAndAnnouncements_Wrp']} ${sectionGap === 'top' ? 'spacing_top' : sectionGap === 'bottom' ? 'spacing_bottom' : sectionGap === 'both' ?'spacing_both' : ''}`} > 
    <div className='container' >
    <SectionHeading title='Dynamic Resource Hub for Students and Researchers' description={<>
          Quisque nulla at ut turpis lobortis. Integer adipiscing urna pulvinar eleifend metus et amet et elit. Elementum suspendisse sit varius ut purus ipsum semper sit. Integer nunc vel praesent viverra velit pellentesque vulputate semper. Nunc commodo integer fermentum tincidunt ut. <br/><br/>
Duis scelerisque donec sit mi nibh. Mauris neque sed diam elit. Sit vulputate adipiscing condimentum massa velit sed. Egestas in integer consequat sodales bibendum diam purus nunc. Velit non rhoncus sit hac habitasse orci. Gravida magna velit porttitor varius arcu nunc enim. Ornare cras sed mauris vel. Scelerisque a aliquam suspendisse nunc nunc aliquam auctor placerat massa. Suscipit in facilisis in id amet non urna commodo. Auctor leo enim eu viverra tristique volutpat facilisis ipsum egestas. Bibendum amet nibh et ultricies. Erat id donec nulla gravida ornare nam amet. A felis in quis id. Ac ac duis non non.<br/><br/>
Lectus fringilla interdum faucibus eros. Augue nunc urna tristique porttitor odio imperdiet semper. Dui porta metus risus turpis ut. Rhoncus lorem nunc vitae in faucibus. A ornare vitae quis parturient amet egestas. Mauris nunc et sodales purus. Pharetra sed ac sagittis gravida ac proin blandit et proin. Egestas adipiscing morbi faucibus mattis urna volutpat tincidunt. Diam vitae magna quam libero non tristique enim lectus.
Eu sit tellus lorem dictum proin nulla nibh ut magna. Ut sed tortor sed aliquet tellus orci egestas mauris. Morbi nisl elit a etiam in eget imperdiet bibendum enim. Etiam ultricies nisi mauris viverra. Enim in sit ipsum mi. Vel tempus pulvinar facilisis leo ullamcorper. Hendrerit turpis nec mauris sagittis quis quis lectus nam diam. Egestas donec vel tincidunt adipiscing
          </>} />
 
    </div>
    </div>
  )
}

export default PageContent