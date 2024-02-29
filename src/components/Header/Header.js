import {
    Grid,
    Column,
    OverflowMenu,
    OverflowMenuItem
} from '@carbon/react';

const Head = () => (

    // <Grid>
    //     <Column sm={4} md={8} lg={16}>

    //         <div class="btn">
    //             <OverflowMenu aria-label="overflow-menu" align="bottom">
    //                 <OverflowMenuItem itemText="Stop app" />
    //                 <OverflowMenuItem itemText="Restart app" />
    //                 <OverflowMenuItem itemText="Rename app" />
    //                 <OverflowMenuItem itemText="Clone and move app" disabled requireTitle />
    //                 <OverflowMenuItem itemText="Edit routes and access" requireTitle />
    //                 <OverflowMenuItem hasDivider isDelete itemText="Delete app" />
    //             </OverflowMenu>
    //         </div>


    //         <nav class="hd" >
    //             <div class="one">

    //                 <ul class="content_links">
    //                     <li>
    //                         <a >How to get?</a>
    //                     </li>
    //                     <li>
    //                         <a >Write to us</a>
    //                     </li>
    //                     <li>
    //                         <a href="" className="open_search">
    //                             <svg width="14px" height="14px" viewBox="0 0 19 19">
    //                                 <circle className="st0" cx="6.5" cy="6.5" r="6.5"></circle>
    //                                 <path className="st0" d="M17,17l-6-6"></path>
    //                             </svg>
    //                         </a>
    //                     </li>

    //                 </ul>
    //                 <ul class="content_info">
    //                     <li>
    //                         <span>Open Today</span>
    //                     </li>
    //                     <li>
    //                         <a >
    //                             10 to 22

    //                         </a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </nav>

    //     </Column>

    // </Grid>

    <Grid>
        <Column sm={0} md={8} lg={16}>
            <nav className='main-nav'>
                <div className='menu'>
                    <div className='left'>
                        <ul>
                            <li>¿Cómo llegar?</li>
                            <li>Escribinos</li>
                            {/* <li>Search</li> */}
                        </ul>
                    </div>
                    <div className='right'>
                        <ul>
                            <li>Abierto Hoy</li>
                            <li>10 a 22</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Column>
        <Column sm={4} md={0} lg={0}>
            <nav className='main-nav'>
                <div className='menu'>
                    <div className='left'>
                        <ul>
                            <li>Abierto Hoy</li>
                        </ul>
                    </div>
                    <div className='right'>
                        <ul>

                            <li>10 a 22</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Column>
        <Column sm={4} md={8} lg={16}>
            <div className='btn'>
                <OverflowMenu aria-label="overflow-menu" align="bottom">
                    <OverflowMenuItem itemText="Stop app" />
                    <OverflowMenuItem itemText="Restart app" />
                    <OverflowMenuItem itemText="Rename app" />
                    <OverflowMenuItem itemText="Clone and move app" disabled requireTitle />
                    <OverflowMenuItem itemText="Edit routes and access" requireTitle />
                    <OverflowMenuItem hasDivider isDelete itemText="Delete app" />
                </OverflowMenu>
            </div>
        </Column>
    </Grid>


);

export default Head;