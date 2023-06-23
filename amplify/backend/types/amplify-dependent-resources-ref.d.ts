export type AmplifyDependentResourcesAttributes = {
  api: {
    Kotohajime: {
      GraphQLAPIEndpointOutput: "string"
      GraphQLAPIIdOutput: "string"
      GraphQLAPIKeyOutput: "string"
    }
  }
  auth: {
    Kotohajime: {
      AppClientID: "string"
      AppClientIDWeb: "string"
      IdentityPoolId: "string"
      IdentityPoolName: "string"
      UserPoolArn: "string"
      UserPoolId: "string"
      UserPoolName: "string"
    }
  }
  function: {
    Kotohajime: {
      Arn: "string"
      LambdaExecutionRole: "string"
      LambdaExecutionRoleArn: "string"
      Name: "string"
      Region: "string"
    }
  }
  storage: {
    s3kotohajimestoragefa52ae71: {
      BucketName: "string"
      Region: "string"
    }
  }
}
