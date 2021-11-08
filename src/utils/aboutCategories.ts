
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
            top : '32.5%',
            left : '95.3%'
        }
    },
     {
         label : 'hard skills',
        style : {
            top : '70.5%',
            left : '82.6%' 
        }
    },
    {
        label : 'soft skills',
        style : {
            flexDirection : 'column',
            top : '92.5%',
            left : '0' 
        }
    },
]