/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Course } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function CourseCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    descriptions: undefined,
    price: undefined,
    image: undefined,
    video: undefined,
    category: undefined,
    duration: undefined,
    learningObjective: [],
    isFeatured: false,
    online: false,
<<<<<<< HEAD
    curriculum: undefined,
    headTitle: undefined,
    headMeta: undefined,
    headContent: undefined,
=======
    curriculum: "",
    headTitle: "",
    headMeta: "",
    headContent: "",
    instructorImage: "",
    instructorName: "",
>>>>>>> b4ecad6e27b2d9e558c2195d7750272efefd4cac
  };
  const [name, setName] = React.useState(initialValues.name);
  const [descriptions, setDescriptions] = React.useState(
    initialValues.descriptions
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [image, setImage] = React.useState(initialValues.image);
  const [video, setVideo] = React.useState(initialValues.video);
  const [category, setCategory] = React.useState(initialValues.category);
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [learningObjective, setLearningObjective] = React.useState(
    initialValues.learningObjective
  );
  const [isFeatured, setIsFeatured] = React.useState(initialValues.isFeatured);
  const [online, setOnline] = React.useState(initialValues.online);
  const [curriculum, setCurriculum] = React.useState(initialValues.curriculum);
  const [headTitle, setHeadTitle] = React.useState(initialValues.headTitle);
  const [headMeta, setHeadMeta] = React.useState(initialValues.headMeta);
  const [headContent, setHeadContent] = React.useState(
    initialValues.headContent
  );
  const [instructorImage, setInstructorImage] = React.useState(
    initialValues.instructorImage
  );
  const [instructorName, setInstructorName] = React.useState(
    initialValues.instructorName
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescriptions(initialValues.descriptions);
    setPrice(initialValues.price);
    setImage(initialValues.image);
    setVideo(initialValues.video);
    setCategory(initialValues.category);
    setDuration(initialValues.duration);
    setLearningObjective(initialValues.learningObjective);
    setCurrentLearningObjectiveValue(undefined);
    setIsFeatured(initialValues.isFeatured);
    setOnline(initialValues.online);
    setCurriculum(initialValues.curriculum);
    setHeadTitle(initialValues.headTitle);
    setHeadMeta(initialValues.headMeta);
    setHeadContent(initialValues.headContent);
    setInstructorImage(initialValues.instructorImage);
    setInstructorName(initialValues.instructorName);
    setErrors({});
  };
  const [currentLearningObjectiveValue, setCurrentLearningObjectiveValue] =
    React.useState(undefined);
  const learningObjectiveRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    descriptions: [{ type: "Required" }],
    price: [{ type: "Required" }],
    image: [{ type: "URL" }],
    video: [{ type: "URL" }],
    category: [{ type: "Required" }],
    duration: [],
    learningObjective: [],
    isFeatured: [{ type: "Required" }],
    online: [],
    curriculum: [{ type: "URL" }],
    headTitle: [],
    headMeta: [],
    headContent: [],
    instructorImage: [{ type: "URL" }],
    instructorName: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          descriptions,
          price,
          image: image || undefined,
          video: video || undefined,
          category,
          duration,
          learningObjective,
          isFeatured,
          online,
          curriculum: curriculum || undefined,
          headTitle,
          headMeta,
          headContent,
          instructorImage,
          instructorName,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Course(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "CourseCreateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              descriptions,
              price,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Descriptions"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions: value,
              price,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.descriptions ?? value;
          }
          if (errors.descriptions?.hasError) {
            runValidationTasks("descriptions", value);
          }
          setDescriptions(value);
        }}
        onBlur={() => runValidationTasks("descriptions", descriptions)}
        errorMessage={errors.descriptions?.errorMessage}
        hasError={errors.descriptions?.hasError}
        {...getOverrideProps(overrides, "descriptions")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price: value,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image: value,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Video"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video: value,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.video ?? value;
          }
          if (errors.video?.hasError) {
            runValidationTasks("video", value);
          }
          setVideo(value);
        }}
        onBlur={() => runValidationTasks("video", video)}
        errorMessage={errors.video?.errorMessage}
        hasError={errors.video?.hasError}
        {...getOverrideProps(overrides, "video")}
      ></TextField>
      <SelectField
        label="Category"
        placeholder="Please select an option"
        isDisabled={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category: value,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      >
        <option
          children="All"
          value="ALL"
          {...getOverrideProps(overrides, "categoryoption0")}
        ></option>
        <option
          children="Web development"
          value="WEB_DEVELOPMENT"
          {...getOverrideProps(overrides, "categoryoption1")}
        ></option>
        <option
          children="Data science"
          value="DATA_SCIENCE"
          {...getOverrideProps(overrides, "categoryoption2")}
        ></option>
        <option
          children="Networking security"
          value="NETWORKING_SECURITY"
          {...getOverrideProps(overrides, "categoryoption3")}
        ></option>
        <option
          children="Graphics media"
          value="GRAPHICS_MEDIA"
          {...getOverrideProps(overrides, "categoryoption4")}
        ></option>
        <option
          children="Office productivity"
          value="OFFICE_PRODUCTIVITY"
          {...getOverrideProps(overrides, "categoryoption5")}
        ></option>
      </SelectField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              duration: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category,
              duration: value,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category,
              duration,
              learningObjective: values,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            values = result?.learningObjective ?? values;
          }
          setLearningObjective(values);
          setCurrentLearningObjectiveValue(undefined);
        }}
        currentFieldValue={currentLearningObjectiveValue}
        label={"Learning objective"}
        items={learningObjective}
        hasError={errors.learningObjective?.hasError}
        setFieldValue={setCurrentLearningObjectiveValue}
        inputFieldRef={learningObjectiveRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Learning objective"
          isRequired={false}
          isReadOnly={false}
          value={currentLearningObjectiveValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.learningObjective?.hasError) {
              runValidationTasks("learningObjective", value);
            }
            setCurrentLearningObjectiveValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "learningObjective",
              currentLearningObjectiveValue
            )
          }
          errorMessage={errors.learningObjective?.errorMessage}
          hasError={errors.learningObjective?.hasError}
          ref={learningObjectiveRef}
          {...getOverrideProps(overrides, "learningObjective")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Is featured"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isFeatured}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured: value,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.isFeatured ?? value;
          }
          if (errors.isFeatured?.hasError) {
            runValidationTasks("isFeatured", value);
          }
          setIsFeatured(value);
        }}
        onBlur={() => runValidationTasks("isFeatured", isFeatured)}
        errorMessage={errors.isFeatured?.errorMessage}
        hasError={errors.isFeatured?.hasError}
        {...getOverrideProps(overrides, "isFeatured")}
      ></SwitchField>
      <SwitchField
        label="Online"
        defaultChecked={false}
        isDisabled={false}
        isChecked={online}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online: value,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.online ?? value;
          }
          if (errors.online?.hasError) {
            runValidationTasks("online", value);
          }
          setOnline(value);
        }}
        onBlur={() => runValidationTasks("online", online)}
        errorMessage={errors.online?.errorMessage}
        hasError={errors.online?.hasError}
        {...getOverrideProps(overrides, "online")}
      ></SwitchField>
      <TextField
        label="Curriculum"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum: value,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.curriculum ?? value;
          }
          if (errors.curriculum?.hasError) {
            runValidationTasks("curriculum", value);
          }
          setCurriculum(value);
        }}
        onBlur={() => runValidationTasks("curriculum", curriculum)}
        errorMessage={errors.curriculum?.errorMessage}
        hasError={errors.curriculum?.hasError}
        {...getOverrideProps(overrides, "curriculum")}
      ></TextField>
      <TextField
        label="Head title"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle: value,
              headMeta,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.headTitle ?? value;
          }
          if (errors.headTitle?.hasError) {
            runValidationTasks("headTitle", value);
          }
          setHeadTitle(value);
        }}
        onBlur={() => runValidationTasks("headTitle", headTitle)}
        errorMessage={errors.headTitle?.errorMessage}
        hasError={errors.headTitle?.hasError}
        {...getOverrideProps(overrides, "headTitle")}
      ></TextField>
      <TextField
        label="Head meta"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta: value,
              headContent,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.headMeta ?? value;
          }
          if (errors.headMeta?.hasError) {
            runValidationTasks("headMeta", value);
          }
          setHeadMeta(value);
        }}
        onBlur={() => runValidationTasks("headMeta", headMeta)}
        errorMessage={errors.headMeta?.errorMessage}
        hasError={errors.headMeta?.hasError}
        {...getOverrideProps(overrides, "headMeta")}
      ></TextField>
      <TextField
        label="Head content"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent: value,
              instructorImage,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.headContent ?? value;
          }
          if (errors.headContent?.hasError) {
            runValidationTasks("headContent", value);
          }
          setHeadContent(value);
        }}
        onBlur={() => runValidationTasks("headContent", headContent)}
        errorMessage={errors.headContent?.errorMessage}
        hasError={errors.headContent?.hasError}
        {...getOverrideProps(overrides, "headContent")}
      ></TextField>
      <TextField
        label="Instructor image"
        isRequired={false}
        isReadOnly={false}
        value={instructorImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage: value,
              instructorName,
            };
            const result = onChange(modelFields);
            value = result?.instructorImage ?? value;
          }
          if (errors.instructorImage?.hasError) {
            runValidationTasks("instructorImage", value);
          }
          setInstructorImage(value);
        }}
        onBlur={() => runValidationTasks("instructorImage", instructorImage)}
        errorMessage={errors.instructorImage?.errorMessage}
        hasError={errors.instructorImage?.hasError}
        {...getOverrideProps(overrides, "instructorImage")}
      ></TextField>
      <TextField
        label="Instructor name"
        isRequired={false}
        isReadOnly={false}
        value={instructorName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              descriptions,
              price,
              image,
              video,
              category,
              duration,
              learningObjective,
              isFeatured,
              online,
              curriculum,
              headTitle,
              headMeta,
              headContent,
              instructorImage,
              instructorName: value,
            };
            const result = onChange(modelFields);
            value = result?.instructorName ?? value;
          }
          if (errors.instructorName?.hasError) {
            runValidationTasks("instructorName", value);
          }
          setInstructorName(value);
        }}
        onBlur={() => runValidationTasks("instructorName", instructorName)}
        errorMessage={errors.instructorName?.errorMessage}
        hasError={errors.instructorName?.hasError}
        {...getOverrideProps(overrides, "instructorName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
