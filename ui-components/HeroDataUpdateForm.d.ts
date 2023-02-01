/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeroData } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeroDataUpdateFormInputValues = {
    image?: string;
    smallText?: string;
    mediumText?: string;
    largeText?: string;
    buttonText?: string;
};
export declare type HeroDataUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
    smallText?: ValidationFunction<string>;
    mediumText?: ValidationFunction<string>;
    largeText?: ValidationFunction<string>;
    buttonText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroDataUpdateFormOverridesProps = {
    HeroDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    smallText?: PrimitiveOverrideProps<TextFieldProps>;
    mediumText?: PrimitiveOverrideProps<TextFieldProps>;
    largeText?: PrimitiveOverrideProps<TextFieldProps>;
    buttonText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeroDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: HeroDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    heroData?: HeroData;
    onSubmit?: (fields: HeroDataUpdateFormInputValues) => HeroDataUpdateFormInputValues;
    onSuccess?: (fields: HeroDataUpdateFormInputValues) => void;
    onError?: (fields: HeroDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HeroDataUpdateFormInputValues) => HeroDataUpdateFormInputValues;
    onValidate?: HeroDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HeroDataUpdateForm(props: HeroDataUpdateFormProps): React.ReactElement;
