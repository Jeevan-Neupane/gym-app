import {css} from 'styled-components';

export const mobile=(props)=>{
    return css`
         @media (max-width: 576px) {
            ${props}
            
         }
    `
}

export const tab=(props)=>{
    return css`
        @media (max-width:992px) {
            ${props}
            
        }
    `
}

export const labtop=(props)=>{
    return css`
        @media (max-width:1200px) {
            ${props}
            
        }
    `
}