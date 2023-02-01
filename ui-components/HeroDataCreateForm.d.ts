/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeroDataCreateFormInputValues = {
    image?: string;
    smallText?: string;
    mediumText?: string;
    largeText?: string;
    buttonText?: string;
};
export declare type HeroDataCreateFormValidationValues = {
    image?: ValidationFunction<string>;
    smallText?: ValidationFunction<string>;
    mediumText?: ValidationFunction<string>;
    largeText?: ValidationFunction<string>;
    buttonText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroDataCreateFormOverridesProps = {
    HeroDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    smallText?: PrimitiveOverrideProps<TextFieldProps>;
    mediumText?: PrimitiveOverrideProps<TextFieldProps>;
    largeText?: PrimitiveOverrideProps<TextFieldProps>;
    buttonText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeroDataCreateFormProps = React.PropsWithChildren<{
    overrides?: HeroDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HeroDataCreateFormInputValues) => HeroDataCreateFormInputValues;
    onSuccess?: (fields: HeroDataCreateFormInputValues) => void;
    onError?: (fields: HeroDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HeroDataCreateFormInputValues) => HeroDataCreateFormInputValues;
    onValidate?: HeroDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function HeroDataCreateForm(props: HeroDataCreateFormProps): React.ReactElement;
