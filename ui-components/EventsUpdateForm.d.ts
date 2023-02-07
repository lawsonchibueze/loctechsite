/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Events } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventsUpdateFormInputValues = {
    topic?: string;
    content?: string;
    Image?: string;
    totalSlot?: number;
    facebook?: string;
    email?: string;
    cost?: number;
    buttonText?: string;
    speakers?: string[];
    date?: string;
    time?: string;
    locationMap?: string;
    location?: string;
};
export declare type EventsUpdateFormValidationValues = {
    topic?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    Image?: ValidationFunction<string>;
    totalSlot?: ValidationFunction<number>;
    facebook?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
    buttonText?: ValidationFunction<string>;
    speakers?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    locationMap?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventsUpdateFormOverridesProps = {
    EventsUpdateFormGrid?: FormProps<GridProps>;
    topic?: FormProps<TextFieldProps>;
    content?: FormProps<TextFieldProps>;
    Image?: FormProps<TextFieldProps>;
    totalSlot?: FormProps<TextFieldProps>;
    facebook?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    cost?: FormProps<TextFieldProps>;
    buttonText?: FormProps<TextFieldProps>;
    speakers?: FormProps<TextFieldProps>;
    date?: FormProps<TextFieldProps>;
    time?: FormProps<TextFieldProps>;
    locationMap?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    events?: Events;
    onSubmit?: (fields: EventsUpdateFormInputValues) => EventsUpdateFormInputValues;
    onSuccess?: (fields: EventsUpdateFormInputValues) => void;
    onError?: (fields: EventsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EventsUpdateFormInputValues) => EventsUpdateFormInputValues;
    onValidate?: EventsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventsUpdateForm(props: EventsUpdateFormProps): React.ReactElement;
