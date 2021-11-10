
interface ItemStyle {
    top : string;
    left ?: string;
    right ?:string
};

export type AboutCategoryProperties = {
    label : string,
    style : ItemStyle
};

export const aboutCategories = [
    {
        label : 'story',
        style: {
            top : '25.5%',
            left : '93.3%'
        }
    },
     {
         label : 'hard skills',
        style : {
            top : '65.5%',
            left : '80.6%',
        }
    },
    {
        label : 'soft skills',
        style : {
            flexDirection : 'column',
            top : '89.5%',
            left : '-35%' ,
            // border :'2px solid',
        }
    },
]